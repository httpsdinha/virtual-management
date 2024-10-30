// src/server/routes/imagem.js
const express = require("express");
const router = express.Router();
const imagemController = require("../controllers/imagemController");
const upload = require("../middlewares/multer"); // Importa o multer

// Rota para fazer o upload da imagem
router.post('/upload-imagem/:id', upload.single('imagem'), imagemController.uploadImagem); // Usa o middleware do multer aqui

// Rota para buscar a imagem por ID
router.get('/imagens/:id', imagemController.buscarImagens);

module.exports = router;
