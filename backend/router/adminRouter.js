// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.getAdminById);

module.exports = router;