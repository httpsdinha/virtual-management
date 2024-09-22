const express = require('express');
const authRoutes = require('./routes/auth');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rotas
app.use('/auth', authRoutes); // Rota de autenticação

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
