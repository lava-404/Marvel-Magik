const express= require('express');
const generateQuestions = require('../controllers/questionsController')

const router = express.Router()

router.post('/', generateQuestions)

module.exports = router