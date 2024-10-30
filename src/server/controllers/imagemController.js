// imagemController.js
const db = require('../config/db'); 
const imagemModel = require('../models/imagemModel');
const path = require('path');
const fs = require('fs');

const uploadImagem = async (req, res) => {
    try {
        const newImage = await Image.create({
            filePath: req.savedFilePath
        });
        res.status(200).json({ message: 'Imagem enviada com sucesso!', filePath: req.savedFilePath });
    } catch (error) {
        console.error('Erro ao salvar o caminho da imagem no banco de dados:', error);
        res.status(500).json({ message: 'Erro ao salvar o caminho da imagem no banco de dados.' });
    }
};

const buscarImagens = async (req, res) => {
    try {
        const image = await Image.findByPk(req.params.id);
        if (image) {
            res.status(200).json(image);
        } else {
            res.status(404).json({ message: 'Imagem não encontrada.' });
        }
    } catch (error) {
        console.error('Erro ao buscar a imagem:', error);
        res.status(500).json({ message: 'Erro ao buscar a imagem.' });
    }
};

module.exports = {
    uploadImagem,
    buscarImagens,
};
