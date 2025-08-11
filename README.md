# Angular + Prisma + MySQL

Projeto simples para testar conexão entre frontend Angular e backend com Prisma ORM e banco MySQL.

## Tecnologias usadas

- Angular (versão 17+)
- Prisma ORM
- MySQL
- Node.js

## Como rodar o projeto

### Backend

1. Instale as dependências:
   ```bash
   cd backend
   npm install
Configure o arquivo .env com sua conexão MySQL (exemplo sem senha):

ini
Copiar código
DATABASE_URL="mysql://root@localhost:3306/nome_do_banco"
Rode as migrações e gere o Prisma Client:

bash
Copiar código
npx prisma migrate dev --name init
npx prisma generate
Inicie o backend:

bash
Copiar código
npm run dev
Frontend
Instale as dependências:

bash
Copiar código
cd frontend
npm install
Inicie o frontend:

bash
Copiar código
npm start
Acesse no navegador em http://localhost:4200.

Contato
Qualquer dúvida, me procure!
