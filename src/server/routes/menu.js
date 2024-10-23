const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.post('/add', menuController.addMenuItem);

module.exports = router;