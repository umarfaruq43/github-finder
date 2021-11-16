const mongoose = require('mongoose');
const joi = require('joi') ;
const jwt = require('jsonwebtoken') ;

const signUpSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        maxlength: 50, 
        lowercase: true,
        unique: true,
        trim: true
    },
    password : {
        type: String,
        required: true
    },
    confirmPassword : {
        type: String,
        required: true
    }, 
    // salt: String,
    // role: {
    //     type: String,
    //     default: 'Normal'
    // },

}, {timeStamp: true}) ;
// signUpSchema.methods.generateAuthtoken = function () {
//     const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'))
//     return token ;
// } 
signUpSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id}, 'jsonWebToken ') ;
    return token ;
}
function validateNewUsers (users) {
    schema = {
        userName: joi.string().min(5).max(50).required(),
        email: joi.string().min(5).max(50).required(),
        password: joi.string().min(5).max(50).required(),
       confirmPassword: joi.string().min(5).max(50).required()
    }
    return (users, schema)
}

const newData = mongoose.model('newData', signUpSchema);

exports.newData = newData
exports.validate = validateNewUsers