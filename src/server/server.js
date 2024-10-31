// src/server/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const tableRoutes = require('./routes/tables');
const menuRoutes = require('./routes/menu');

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use('/tables', tableRoutes);
app.use('/auth', authRoutes);
app.use('/menu', menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

