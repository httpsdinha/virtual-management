// src/server/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const upload = require('./middlewares/multer'); // Importando a configuração do multer
const authRoutes = require('./routes/auth');
const tableRoutes = require('./routes/tables');
const menuRoutes = require('./routes/menu');
const imagemRoutes = require('./routes/imagem');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Rotas
app.use('/tables', tableRoutes);
app.use('/auth', authRoutes);
app.use('/menu', menuRoutes);
app.use('/imagem', imagemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

