const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MEANStackDB',{useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err){
        console.log('database is connected!!');
    }
    else{
        console.log("error");
    }
});

require('../model/user.model');