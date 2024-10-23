const express = require('express');
const cors = require('cors'); // Importa o CORS
const authRoutes = require('./routes/auth');
const tableRoutes = require('./routes/tables');
require('dotenv').config();

const app = express();


app.use(cors()); 
app.use(express.json());

app.use('/tables', tableRoutes);
app.use('/auth', authRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
