const {loginCtrller} = require('../controllers/login.js') ;

const express = require("express") ;
const router = express.Router()

router.post('/login', loginCtrller ) ;

module.exports = router ;