const express = require("express");
const router = express.Router();
const imagemController = require("../controllers/imagemController");

// Rota para buscar imagem por ID
router.get('/imagens/:id', imagemController.buscarImagemPorId);

// Rota para buscar todas as imagens
router.get('/imagens', imagemController.buscarImagens);

// Rota para enviar imagem
router.post('/imagem/upload-imagem/:id', imagemController.enviarImagem); 

module.exports = router;

