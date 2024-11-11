// src/server/app.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const menuRoutes = require("./routes/menu");
const pedidoRoutes = require("./routes/pedidoRoutes");
const tableRoutes = require("./routes/tables");

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use("/menu", menuRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/tables", tableRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
