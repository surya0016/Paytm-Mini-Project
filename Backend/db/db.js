const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://surya016:teYszTnjZKUgTI9l@cluster0.s9hrlwr.mongodb.net/Paytm");

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:false,
        trim:true,
        maxLength:50
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3,
        maxLength:30,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    
})

const accountsSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    balance:{
        type:Number,
        required:true,
    }
})

const Account = mongoose.model("Account",accountsSchema)
const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account
};