const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Rota para adicionar itens ao cardápio
router.post('/add', menuController.addMenuItem);

// Rota para atualizar itens do cardápio
router.put('/update/:id', menuController.updateMenuItem);

// Rota para excluir itens do cardápio
router.delete('/delete/:id', menuController.deleteMenuItem);

// Rota para listar itens do cardápio
router.get('/list', menuController.getMenuItems);

// Rota para buscar um item do cardápio por ID
router.get('/:id', menuController.getMenuItemById);

module.exports = router;