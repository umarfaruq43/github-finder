const express = require('express') ;
const bodyParser = require('body-parser') ;
const mongoose = require('mongoose') ;
const morgan = require('morgan') ;
const cors = require('cors')

//Load all routes
const signUpRouter = require('./routes/signUp') ;
const connectDb = require('./config/database') ;
const loginRouter = require('./routes/login') ;

const app = express() ; 

require('dotenv').config();

// if (process.env.NODE_ENV === 'development') {
//     app.use(cors ({
//         origin: process.env.CLIENT_URL
//     })) 

//     app.use(morgan('dev'))

// }

// app.use( (req, res, next) => {
//     res.status(404).json({
//         success: false,
//         message: "page is not found"
//     })
// })
app.use(bodyParser.json()) ;

//Use all routes
app.use('/', signUpRouter) ;
app.use('/', loginRouter) ;

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is connected to port ${port}`)
})