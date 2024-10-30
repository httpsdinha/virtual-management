const db = require('../config/db'); 
const imagemModel = require('../models/imagemModel');

const buscarImagemPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const imagem = await imagemModel.buscarImagemPorId(id);
        if (!imagem) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        // Verifique se 'imagem' está definido antes de chamar toString
        if (!imagem.imagem) {
            return res.status(404).json({ message: 'Imagem não possui dados.' });
        }
        res.status(200).json({
            id: imagem.id,
            imagem: imagem.imagem.toString('base64'), // Acesso à coluna correta
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao buscar a imagem.' });
    }
};

const buscarImagens = async (req, res) => {
    try {
        const imagens = await imagemModel.buscarImagens();
        const imagensBase64 = imagens.map(row => ({
            id: row.id,
            imagem: row.imagem.toString('base64'), // Acesso à coluna correta
        }));
        res.status(200).json(imagensBase64);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao buscar as imagens.' });
    }
};

const enviarImagem = async (req, res) => {
    const { imagem } = req.body;
    try {
        const novaImagem = await imagemModel.salvarImagem(Buffer.from(imagem, 'base64'));
        res.status(201).json(novaImagem);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Erro ao salvar a imagem.' });
    }
};

module.exports = {
    buscarImagemPorId,
    buscarImagens,
    enviarImagem,
};
