const pool = require('../config/db');

const getAllUsers = async () => {
  const { rows } = await pool.query('SELECT * FROM admin_user');
  return rows;
};

const getUserByUsername = async (username) => {
  const { rows } = await pool.query('SELECT * FROM admin_user WHERE username = $1', [username]);
  return rows[0];
};

module.exports = {
  getAllUsers,
  getUserByUsername,
};