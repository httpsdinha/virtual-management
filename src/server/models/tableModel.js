const pool = require("../config/db");

const getAllTables = async () => {
  const { rows } = await pool.query("SELECT * FROM tables");
  return rows;
};

const updateTableStatus = async (id, status) => {
  const { rows } = await pool.query(
    "UPDATE tables SET status = $1 WHERE id = $2 RETURNING *",
    [status, id]
  );
  return rows[0];
};

const addTable = async (number, status) => {
  const { rows } = await pool.query(
    "INSERT INTO tables (number, status) VALUES ($1, $2) RETURNING *",
    [number, status]
  );
  return rows[0];
};

module.exports = {
  getAllTables,
  updateTableStatus,
  addTable,
};
