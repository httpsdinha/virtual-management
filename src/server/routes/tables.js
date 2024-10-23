const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');


router.get('/', tableController.getTables);


router.put('/:id', tableController.updateTableStatus);


router.post('/', tableController.addTable);

module.exports = router;