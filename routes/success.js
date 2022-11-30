const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

let successControllers = require('../controllers/success');
const router = express.Router();

// /admin/add-product => GET
router.get('/success', successControllers.getSuccessControllers);

// /admin/add-product => POST
router.post('/success', successControllers.postSuccessControllers);

module.exports = router;