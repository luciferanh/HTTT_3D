const express = require('express');
const router=express.Router();
const HomeController= require('../controllers/HomeController');
const UserController= require('../controllers/UserController');
router.get('/',HomeController.index);
router.get('/store',HomeController.store);
router.get('/login',UserController.login);
module.exports =router;