const express = require('express');
const cors = require('cors'); 
const authRoutes = require('./routes/auth');
const tableRoutes = require('./routes/tables');
const menuRoutes = require('./routes/menu');
const imagemRoutes = require('./routes/imagem');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


app.use('/tables', tableRoutes);
app.use('/auth', authRoutes); 
app.use('/menu', menuRoutes);
app.use('/imagem', imagemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

