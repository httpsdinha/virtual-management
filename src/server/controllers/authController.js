const adminUserModel = require('../models/adminUserModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await adminUserModel.getAllUsers();
    return res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await adminUserModel.getUserByUsername(username);

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Senha inválida' });
    }

    return res.json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};
