const mongoose = require('mongoose');
const BrowseProfileSchema = new mongoose.Schema({

    name :{
        type : String,
        required: true
    },
    hireable : {
        type : Boolean,
        required : true
    },email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    password1:{
        type:String,
        required:true
    }
    ,date :{
        type: String,
        required:true
        // default: Date.now
    }
    ,github:{
        type : String,
        required:true
    },website:{
        type : String,
        required:true
    },
    location:{
        type : String,
        required:true
    },
    bio:{
        type : String,
        required:true
    },
    picture:{
       data: Buffer,
        contentType: String
    },
    fieldofinterest:{
        type: Array,
        required: true

    }, seeking:{
        type: Array,
        required: true

    }, techstack:{
        type: Array,
        required: true

    }

});


module.exports = mongoose.model('BrowseProfile',BrowseProfileSchema)





