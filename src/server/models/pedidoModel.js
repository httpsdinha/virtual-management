const pool = require("../config/db");

const createPedido = async (total, itens) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const res = await client.query(
      "INSERT INTO pedidos (total) VALUES ($1) RETURNING id",
      [total]
    );
    const pedidoId = res.rows[0].id;

    for (const item of itens) {
      await client.query(
        "INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco) VALUES ($1, $2, $3, $4)",
        [pedidoId, item.produto_id, item.quantidade, item.preco]
      );
    }

    await client.query("COMMIT");
    return pedidoId;
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

const getPedidos = async () => {
  const res = await pool.query(
    `SELECT p.id, p.total, p.data_pedido, 
            ip.produto_id, ip.quantidade, ip.preco, 
            m.nome 
     FROM pedidos p 
     JOIN itens_pedido ip ON p.id = ip.pedido_id 
     JOIN menu_items m ON ip.produto_id = m.id`
  );
  const pedidos = res.rows.reduce((acc, row) => {
    const pedido = acc.find(p => p.id === row.id);
    if (pedido) {
      pedido.itens.push({
        produto_id: row.produto_id,
        quantidade: row.quantidade,
        preco: row.preco,
        nome: row.nome,
      });
    } else {
      acc.push({
        id: row.id,
        total: row.total,
        data_pedido: row.data_pedido,
        itens: [{
          produto_id: row.produto_id,
          quantidade: row.quantidade,
          preco: row.preco,
          nome: row.nome,
        }],
      });
    }
    return acc;
  }, []);
  return pedidos;
};

const getPedidoById = async (id) => {
  const res = await pool.query(
    `SELECT p.id, p.total, p.data_pedido, 
            ip.produto_id, ip.quantidade, ip.preco, 
            m.nome 
     FROM pedidos p 
     JOIN itens_pedido ip ON p.id = ip.pedido_id 
     JOIN menu_items m ON ip.produto_id = m.id 
     WHERE p.id = $1`,
    [id]
  );
  const pedido = {
    id: res.rows[0].id,
    total: res.rows[0].total,
    data_pedido: res.rows[0].data_pedido,
    itens: res.rows.map(row => ({
      produto_id: row.produto_id,
      quantidade: row.quantidade,
      preco: row.preco,
      nome: row.nome, // Include the product name
    })),
  };
  return pedido;
};

const deletePedido = async (id) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM itens_pedido WHERE pedido_id = $1", [id]);
    await client.query("DELETE FROM pedidos WHERE id = $1", [id]);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};

module.exports = {
  createPedido,
  getPedidos,
  getPedidoById,
  deletePedido,
};
