const express = require("express");
const pedidoController = require("../controllers/pedidoController");

const router = express.Router();

router.post("/", pedidoController.createPedido);
router.get("/", pedidoController.getPedidos);
router.get("/:id", pedidoController.getPedidoById);
router.delete("/:id", pedidoController.deletePedido);

module.exports = router;