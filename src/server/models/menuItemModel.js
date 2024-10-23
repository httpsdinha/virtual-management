const pool = require('../config/db');

const addMenuItem = async (nome, descricao, preco, tipo, categoria) => {
  const { rows } = await pool.query(
    'INSERT INTO menu_items (nome, descricao, preco, tipo, categoria) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nome, descricao, preco, tipo, categoria]
  );
  return rows[0];
};

module.exports = {
  addMenuItem,
};