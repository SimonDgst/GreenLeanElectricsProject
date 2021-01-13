const express = require('express');
const router = express.Router();

const prosumerControl = require('../controllers/auth');

router.post('/signup', prosumerControl.signup);
router.post('/login', prosumerControl.login);

module.exports = router;