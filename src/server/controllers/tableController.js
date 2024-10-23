const tableModel = require('../models/tableModel');

const getTables = async (req, res) => {
  try {
    const tables = await tableModel.getAllTables();
    res.json(tables);
  } catch (error) {
    console.error('Erro ao buscar mesas:', error);
    res.status(500).json({ error: 'Erro ao buscar mesas' });
  }
};

const updateTableStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTable = await tableModel.updateTableStatus(id, status);

    if (updatedTable) {
      res.json(updatedTable);
    } else {
      res.status(404).send('Mesa não encontrada');
    }
  } catch (error) {
    console.error('Erro ao atualizar status da mesa:', error);
    res.status(500).json({ error: 'Erro ao atualizar status da mesa' });
  }
};

const addTable = async (req, res) => {
  const { number, status } = req.body;

  try {
    const newTable = await tableModel.addTable(number, status);
    res.status(201).json(newTable);
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