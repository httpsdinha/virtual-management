const express = require("express");
const router = express.Router();
const imagemController = require("../controllers/imagemController");

router.post("/upload-imagem", imagemController.salvarImagem);

router.get("/imagens/:id", imagemController.buscarImagem);

module.exports = router;

