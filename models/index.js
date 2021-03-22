const dbUrl = 'mongodb://localhost/quote_api';

const mongoose = require('mongoose');
// mongoose.set('debug', true);
mongoose.connect(dbUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true
})
.then(() => {
    console.log("Mongo Connection Open");
})
.catch( err =>{
    console.log("Mongo Connection Error: " + err);
})

// mongoose.Promise = Promise;

module.exports.Quote = require("./quotes");