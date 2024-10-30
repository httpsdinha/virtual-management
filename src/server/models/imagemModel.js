// imagemModel.js
const pool = require('../config/db');

const salvarImagem = async (imagem) => {
    const query = "INSERT INTO imagens (imagem) VALUES ($1) RETURNING *"; // Corrigido para usar 'imagem'
    const values = [imagem];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const buscarImagemPorId = async (id) => {
    const query = "SELECT * FROM imagens WHERE id = $1";
    const values = [id];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
        return null; // Retorna null se não encontrar a imagem
    }
    return result.rows[0]; // Retorna a primeira imagem encontrada
};

const buscarImagens = async () => {
    const query = "SELECT * FROM imagens ORDER BY id ASC LIMIT 3";
    const result = await pool.query(query);
    return result.rows;
};

module.exports = {
    salvarImagem,
    buscarImagemPorId,
    buscarImagens,
};
