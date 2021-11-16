const {newData, validate} = require('../model/signUp') ;
const bodyParser = require('body-parser') ;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken') ;


exports.registerCtrller = async (req, res) => {
    
     const {error} = validate(req.body) ;
     if ( error ) return res.status(400).send(error.details[0].message) ;

    const userData = await newData.findOne({email: req.body.email}) ;
    if (userData) return res.status(400).send("email already exist!") ;

    const newUserData = new newData ({
        userName: req.body.userName, 
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }) ;
    try {
        if (newUserData.password === newUserData.confirmPassword) {
            const salt = await bcrypt.genSalt(1) ;
            newUserData.password = await bcrypt.hash(newUserData.password, salt) ;
            newUserData.confirmPassword = newUserData.password
            await newUserData.save();
            const token = newUserData.generateAuthToken() ;
            res.status(200).header('auth', token).send('registered successfully') ;
        }
        else {
            res.send('password comparison failed!') ; 
        }
    }
    catch (error) {
        console.error(error) 
    }
    
}