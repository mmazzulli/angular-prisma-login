# 🔐 Sistema de Autenticação (Angular Standalone + Node.js + Prisma + MySQL)

Este projeto é um exemplo simples de autenticação de usuários com **login** e **cadastro**, desenvolvido para fins de estudo.

Ele é dividido em duas partes:
- **Frontend:** Angular Standalone (Angular 17+)
- **Backend:** Node.js + Express + Prisma ORM + MySQL

---

## 🚀 Tecnologias utilizadas

### **Frontend**
- [Angular Standalone](https://angular.dev) (sem módulos)
- Forms nativos do Angular
- `HttpClient` para comunicação com a API

### **Backend**
- [Express](https://expressjs.com/) — Servidor HTTP
- [Prisma](https://www.prisma.io/) — ORM para MySQL
- [bcrypt](https://www.npmjs.com/package/bcrypt) — Hash de senhas
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) — Autenticação via JWT
- [cors](https://www.npmjs.com/package/cors) — Controle de requisições

**Dependências Backend:**
json
@prisma/client": "^6.14.0",
"bcrypt": "^6.0.0",
"cors": "^2.8.5",
"express": "^5.1.0",
"jsonwebtoken": "^9.0.2",
"prisma": "^6.14.0"
📂 Estrutura de pastas
bash
Copiar
Editar
/frontend   → Aplicação Angular Standalone
/backend    → API Node.js com Express e Prisma
🛠️ Como rodar localmente
1️⃣ Clonar repositório
bash
Copiar
Editar
git clone https://github.com/SEU_USUARIO/SEU_REPO.git
cd SEU_REPO
2️⃣ Configurar o backend
bash
Copiar
Editar
cd backend
npm install
Criar o arquivo .env:

env
Copiar
Editar
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
Rodar migrações do Prisma:

bash
Copiar
Editar
npx prisma migrate dev --name init
Iniciar servidor:

bash
Copiar
Editar
node server.js
O backend estará rodando em http://localhost:3000

3️⃣ Configurar o frontend
bash
Copiar
Editar
cd ../frontend
npm install
Editar a URL da API no AuthService (se necessário) para apontar para http://localhost:3000.

Rodar:

bash
Copiar
Editar
ng serve
O frontend estará disponível em http://localhost:4200

🐳 Como rodar com Docker
1️⃣ Criar arquivo docker-compose.yml na raiz:
yaml
Copiar
Editar
version: '3.8'
services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: authdb
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
2️⃣ Subir o banco de dados:
bash
Copiar
Editar
docker-compose up -d
O banco estará disponível em localhost:3306 (usuário root, senha root).

💡 Funcionalidades
Cadastro de usuário com hash seguro de senha

Login com geração de token JWT

Rotas de API protegidas por autenticação

Frontend com formulário de login e cadastro

Redirecionamento pós-login para página de boas-vindas

📌 Melhorias futuras
Implementar AuthGuard no Angular

Adicionar logout

Proteção de rotas no backend com middleware JWT

Layout responsivo com melhor design

Validação mais completa no frontend e backend

📜 Licença
Este projeto é livre para uso e modificação para fins de estudo.
