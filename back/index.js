const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    await prisma.$connect();
    res.json({ message: 'Conexão ao banco realizada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao conectar ao banco', details: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

app.listen(3000, () => {
  console.log('Servidor backend rodando na porta 3000');
});