const pool = require('../config/db');

const getTables = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tables');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar mesas:', error);
    res.status(500).json({ error: 'Erro ao buscar mesas' });
  }
};

const updateTableStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await pool.query(
      'UPDATE tables SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Mesa não encontrada');
    }
  } catch (error) {
    console.error('Erro ao atualizar status da mesa:', error);
    res.status(500).json({ error: 'Erro ao atualizar status da mesa' });
  }
};

const addTable = async (req, res) => {
  const { id, number, status } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO tables (id, number, status) VALUES ($1, $2, $3) RETURNING *',
      [id, number, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao adicionar mesa:', error);
    res.status(500).json({ error: 'Erro ao adicionar mesa' });
  }
};

module.exports = {
  getTables,
  updateTableStatus,
  addTable,
};