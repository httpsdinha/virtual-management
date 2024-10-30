// src/server/models/imagemModel.js
const pool = require('../config/db'); // Certifique-se de que o pool de conexões está configurado corretamente

// Função para salvar o caminho da imagem no banco de dados
const salvarImagemPorId = async (id, imagePath) => {
    const query = "UPDATE imagens SET imagem = $1 WHERE id = $2"; // Atualiza a coluna 'imagem' com o caminho
    const values = [imagePath, id];
    try {
        const result = await pool.query(query, values);
        return result.rowCount; // Retorna o número de linhas afetadas
    } catch (error) {
        console.error('Erro ao salvar a imagem no banco de dados:', error);
        throw error;
    }
};

// Função para buscar a imagem pelo ID
const buscarImagemPorId = async (id) => {
    const query = "SELECT * FROM imagens WHERE id = $1";
    const values = [id];
    try {
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return null; // Retorna null se não encontrar a imagem
        }
        return result.rows[0]; // Retorna a primeira imagem encontrada
    } catch (error) {
        console.error('Erro ao buscar a imagem no banco de dados:', error);
        throw error;
    }
};

module.exports = {
    salvarImagemPorId,
    buscarImagemPorId,
};
