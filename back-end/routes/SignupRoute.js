const express = require('express');
const router = express.Router();
const googleAuth = require('../controllers/SignUpController')
router.post('/google-auth', googleAuth )

module.exports = router;