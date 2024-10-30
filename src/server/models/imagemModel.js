const pool = require('../config/db');

const salvarImagem = async (imagem) => {
  const query = "INSERT INTO imagens (data) VALUES ($1) RETURNING *";
  const values = [imagem];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const buscarImagemPorId = async (id) => {
  const query = "SELECT * FROM imagens WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  salvarImagem,
  buscarImagemPorId,
};
