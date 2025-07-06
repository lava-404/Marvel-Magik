const express = require('express');
const router = express.Router();
const createSummary = require('../controllers/SummaryContoller.js')

router.post('/', createSummary)

module.exports = router