const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    email:{
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true     
    },
    salt:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    about:{
        type: String,
        trim: true
    },
    role:{
        type: Number,
        default: 0
    }, 
    historique: {
        type: Array,
        default: []
    }
}, {timestamps: true})