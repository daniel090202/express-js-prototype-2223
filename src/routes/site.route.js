const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/Site.Controller');

router.get('/', siteController.home);

module.exports = router;
