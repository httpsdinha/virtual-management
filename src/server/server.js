const express = require('express');
const cors = require('cors'); 
const authRoutes = require('./routes/auth');
const tableRoutes = require('./routes/tables');
const menuRoutes = require('./routes/menu');
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/tables', tableRoutes);
app.use('/auth', authRoutes); 
app.use('/menu', menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
