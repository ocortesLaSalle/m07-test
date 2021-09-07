const express = require('express');
const router = express.Router();
const numberController = require('../controllers/numberController');

router.get('/mult2', numberController.getTable2);
router.get('/mult3', numberController.getTable3);
router.get('/mult4', numberController.getTable4);
router.get('/mult5', numberController.getTable5);

module.exports = router;