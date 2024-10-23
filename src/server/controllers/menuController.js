const menuItemModel = require('../models/menuItemModel');

const addMenuItem = async (req, res) => {
  const { nome, descricao, preco, tipo, categoria } = req.body;

  // Validação básica
  if (!nome || !descricao || !preco || !tipo) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  if (tipo === 'pizza' && !['doce', 'salgada'].includes(categoria)) {
    return res.status(400).json({ error: 'Categoria inválida para pizza' });
  }

  if (tipo === 'bebida' && !['refrigerante', 'agua', 'cerveja', 'drink'].includes(categoria)) {
    return res.status(400).json({ error: 'Categoria inválida para bebida' });
  }

  try {
    const newItem = await menuItemModel.addMenuItem(nome, descricao, preco, tipo, categoria);
    res.status(201).json({ message: 'Item adicionado com sucesso', item: newItem });
  } catch (error) {
    console.error('Erro ao adicionar item ao cardápio:', error);
    res.status(500).json({ error: 'Erro ao adicionar item ao cardápio' });
  }
};

module.exports = {
  addMenuItem,
};