const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = "chave-secreta-super-segura"; // depois usar .env

// Rota de cadastro
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) return res.status(400).json({ error: "Email já cadastrado" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword }
    });

    res.json({ message: "Usuário criado com sucesso", userId: user.id });
});

// Rota de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Credenciais inválidas" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: "Credenciais inválidas" });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));