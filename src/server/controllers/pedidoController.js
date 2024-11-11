const pedidoModel = require("../models/pedidoModel");

const createPedido = async (req, res) => {
  const { total, itens } = req.body;
  try {
    const pedidoId = await pedidoModel.createPedido(total, itens);
    res.status(201).json({ pedidoId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidos = async (req, res) => {
  try {
    const pedidos = await pedidoModel.getPedidos();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidoById = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await pedidoModel.getPedidoById(id);
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidosByTable = async (req, res) => {
  const { tableId } = req.params;
  try {
    const pedidos = await pedidoModel.getPedidosByTable(tableId);
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePedido = async (req, res) => {
  const { id } = req.params;
  try {
    await pedidoModel.deletePedido(id);
    res.status(200).json({ message: "Pedido concluido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPedido,
  getPedidos,
  getPedidoById,
  deletePedido,
  getPedidosByTable,
};
