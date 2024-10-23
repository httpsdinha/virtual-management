const pool = require('../config/db');

const addMenuItem = async (nome, descricao, preco, tipo, categoria) => {
  const { rows } = await pool.query(
    'INSERT INTO menu_items (nome, descricao, preco, tipo, categoria) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nome, descricao, preco, tipo, categoria]
  );
  return rows[0];
};

const updateMenuItem = async (id, nome, descricao, preco, tipo, categoria) => {
  const { rows } = await pool.query(
    'UPDATE menu_items SET nome = $1, descricao = $2, preco = $3, tipo = $4, categoria = $5 WHERE id = $6 RETURNING *',
    [nome, descricao, preco, tipo, categoria, id]
  );
  return rows[0];
};

const deleteMenuItem = async (id) => {
  const { rows } = await pool.query(
    'DELETE FROM menu_items WHERE id = $1 RETURNING *',
    [id]
  );
  return rows[0];
};

module.exports = {
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};