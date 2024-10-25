const { get } = require('mongoose');
const menuItemModel = require('../models/menuItemModel');

const addMenuItem = async (req, res) => {
  const { nome, descricao, preco, tipo, categoria } = req.body;

  // Validação básica
  if (!nome || !descricao || !preco || !tipo || !categoria) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const newItem = await menuItemModel.addMenuItem(nome, descricao, preco, tipo, categoria);
    res.status(201).json({ message: 'Item adicionado com sucesso', item: newItem });
  } catch (error) {
    console.error('Erro ao adicionar item ao cardápio:', error);
    res.status(500).json({ error: 'Erro ao adicionar item ao cardápio' });
  }
};

const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, tipo, categoria } = req.body;

  // Validação básica
  if (!nome || !descricao || !preco || !tipo || !categoria) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const updatedItem = await menuItemModel.updateMenuItem(id, nome, descricao, preco, tipo, categoria);
    if (updatedItem) {
      res.json({ message: 'Item atualizado com sucesso', item: updatedItem });
    } else {
      res.status(404).json({ error: 'Item não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao atualizar item do cardápio:', error);
    res.status(500).json({ error: 'Erro ao atualizar item do cardápio' });
  }
};

const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await menuItemModel.deleteMenuItem(id);
    if (deletedItem) {
      res.json({ message: 'Item excluído com sucesso', item: deletedItem });
    } else {
      res.status(404).json({ error: 'Item não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir item do cardápio:', error);
    res.status(500).json({ error: 'Erro ao excluir item do cardápio' });
  }
};

const getMenuItems = async (req, res) => {
  const { tipo } = req.query;
  try {
    const items = await menuItemModel.getMenuItems(tipo);
    res.json(items);
  } catch (error) {
    console.error('Erro ao listar itens do cardápio:', error);
    res.status(500).json({ error: 'Erro ao listar itens do cardápio' });
  }
};

const getMenuItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await menuItemModel.getMenuItemById(id);
    if (item.length > 0) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar item do cardápio:', error);
    res.status(500).json({ error: 'Erro ao buscar item do cardápio' });
  }
};

module.exports = {
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenuItems,
  getMenuItemById,
};