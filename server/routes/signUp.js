const express = require('express') ;
const router = express.Router() ;
const { registerCtrller } = require('../controllers/signUp') ;

router.post('/signUp', registerCtrller) ;

module.exports = router ;
