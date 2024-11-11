const pool = require("../config/db");

const addMenuItem = async (nome, descricao, preco, tipo, categoria) => {
  const { rows } = await pool.query(
    "INSERT INTO menu_items (nome, descricao, preco, tipo, categoria) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [nome, descricao, preco, tipo, categoria]
  );
  return rows[0]; // Retorna o primeiro item inserido
};

const updateMenuItem = async (id, nome, descricao, preco, tipo, categoria) => {
  const { rows } = await pool.query(
    "UPDATE menu_items SET nome = $1, descricao = $2, preco = $3, tipo = $4, categoria = $5 WHERE id = $6 RETURNING *",
    [nome, descricao, preco, tipo, categoria, id]
  );
  return rows[0]; // Retorna o item atualizado
};

const deleteMenuItem = async (id) => {
  const { rows } = await pool.query(
    "DELETE FROM menu_items WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0]; // Retorna o item excluído
};

const getMenuItems = async ({ tipo, categoria, id }) => {
  let query = "SELECT * FROM menu_items";
  const values = [];
  const conditions = [];

  // Adiciona as condições dinamicamente
  if (tipo) {
    conditions.push(`tipo = $${conditions.length + 1}`);
    values.push(tipo);
  }

  if (categoria) {
    conditions.push(`categoria = $${conditions.length + 1}`);
    values.push(categoria);
  }

  if (id) {
    conditions.push(`id = $${conditions.length + 1}`);
    values.push(id);
  }

  // Concatena as condições na query SQL
  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  // Executa a query e retorna os resultados
  const { rows } = await pool.query(query, values);
  return rows; // Retorna todos os itens que atendem às condições
};

module.exports = {
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenuItems,
};
