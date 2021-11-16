const mongoose = require('mongoose') ;

require('dotenv').config() ;

 exports.connectDb = mongoose.connect(process.env.mongodb, {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
.then ( () => console.log("connected to mongodb") )
.catch( err => console.log('could not connect to mongodb', err )) ;
