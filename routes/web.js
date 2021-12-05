const express = require('express');
const router=express.Router();
const HomeController= require('../controllers/HomeController');
const UserController= require('../controllers/UserController');
router.get('/',HomeController.index);
router.post('/',HomeController.index);
router.get('/login',UserController.login);
module.exports =router;