const pool = require('../config/db');

exports.getUsers = async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM admin_user'); // Seleciona todos os usuários
      return res.json(rows); // Retorna a lista de usuários no formato JSON
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return res.status(500).json({ message: 'Erro no servidor' });
    }
  };

  exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const { rows } = await pool.query('SELECT * FROM admin_user WHERE username = $1', [username]);
      const user = rows[0];
  
      if (!user) {
        return res.status(400).json({ message: 'Usuário não encontrado' });
      }
  
      // Comparar a senha diretamente (sem hash)
      if (user.password !== password) {
        return res.status(400).json({ message: 'Senha inválida' });
      }
  
      // Se as credenciais estiverem corretas
      return res.json({ message: 'Login realizado com sucesso!' });
  
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ message: 'Erro no servidor' });
    }
  };
