
const express = require('express');

const contactusController= require('../controllers/contactus');
const router = express.Router();
// /admin/add-product => GET
router.get('/contactus', contactusController.getContactusControllers );

// /admin/add-product => POST
router.post('/contactus',contactusController.postContactusController);

module.exports = router;
