const {newData, validate} = require("../model/signUp") ;

const bcrypt = require('bcrypt') ;

exports.loginCtrller = async (req, res) => {
    const User = await newData.findOne({email: req.body.email}) ;
    if (!User) return res.status(400).send('you are not registered') ;

    const comparePasswrd  = await bcrypt.compare(req.body.password, User.password) ;
    if (!comparePasswrd) return res.status(400).send('incorrect password') ;

    token = User.generateAuthToken() ;
    res.status(200).header('auth', token).send('welcome back!')

}