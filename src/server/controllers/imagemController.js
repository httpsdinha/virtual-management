const db = require('../config/db'); 

const salvarImagem = async (req, res) => {
  const numeroImagem = req.params.numero;
  const { imagem } = req.body; 

  try {
      
      if (numeroImagem < 1 || numeroImagem > 3) {
          return res.status(400).send({ message: 'Número da imagem inválido. Use 1, 2 ou 3.' });
      }

      
      const imagemBuffer = Buffer.from(imagem.split(',')[1], 'base64');

      
      const updateQuery = `INSERT INTO imagens (id, imagem) VALUES ($1, $2) 
                           ON CONFLICT (id) DO UPDATE SET imagem = EXCLUDED.imagem`;
      
      await db.query(updateQuery, [numeroImagem, imagemBuffer]);

      res.status(200).send({ message: `Imagem ${numeroImagem} salva com sucesso!` });
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao salvar a imagem.' });
  }
};
const buscarImagem = async (req, res) => {
  const { id } = req.params;

  try {
    const imagem = await imagemModel.buscarImagemPorId(id);

    if (!imagem) {
      return res.status(404).json({ error: "Imagem não encontrada." });
    }

    res.status(200).json(imagem);
  } catch (error) {
    console.error("Erro ao buscar imagem:", error);
    res.status(500).json({ error: "Erro ao buscar imagem no banco de dados." });
  }
};
module.exports = {
    salvarImagem,
    buscarImagem,
};
