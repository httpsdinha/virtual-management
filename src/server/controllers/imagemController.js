// controllers/imagemController.js
const imagemModel = require("../models/imagemModel");

const salvarImagem = async (req, res) => {
  const { imagem } = req.body;

  if (!imagem) {
    return res.status(400).json({ error: "Imagem não fornecida." });
  }

  try {
    const imagemSalva = await imagemModel.salvarImagem(imagem);
    res.status(201).json({ message: "Imagem salva com sucesso!", data: imagemSalva });
  } catch (error) {
    console.error("Erro ao salvar imagem:", error);
    res.status(500).json({ error: "Erro ao salvar imagem no banco de dados." });
  }
};

const buscarImagem = async (req, res) => {
  const { id } = req.params;

  try {
    const imagem = await imagemModel.buscarImagemPorId(id);

    if (!imagem) {
      return res.status(404).json({ error: "Imagem não encontrada." });
    }

    res.status(200).json(imagem);
  } catch (error) {
    console.error("Erro ao buscar imagem:", error);
    res.status(500).json({ error: "Erro ao buscar imagem no banco de dados." });
  }
};

module.exports = {
  salvarImagem,
  buscarImagem,
};
