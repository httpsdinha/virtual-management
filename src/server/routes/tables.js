const express = require('express');
const router = express.Router();

let tables = [
    { id: 1, status: 'livre' },
    { id: 2, status: 'ocupada' },
    { id: 3, status: 'finalizada' },
];

router.get('/', (req, res) => {
    res.json(tables);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const table = tables.find(t => t.id == id);
    if (table) {
      table.status = status;
      res.json(table);
    } else {
      res.status(404).send('Mesa não encontrada');
    }
  });

  router.post('/', (req, res) => {
    const { id, number, status } = req.body;
    const newTable = { id, number, status };
    tables.push(newTable);
    res.status(201).json(newTable);
});

  module.exports = router;