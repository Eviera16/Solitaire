const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String, required:[true, "hey you need a name."], minlength:[3, "name must be at least 3 characters long."]},
    email:{type:String, required:[true, "hey you need a email."], minliength:[10, "type must be at least 10 characater long."]},
    password:{type:String, required:[true, "hey you need a password."], minlength:[3, "password must be at least 3 characters long."]},
    score:{type:Number}
}, {timestamps:true})

const User = mongoose.model("User", UserSchema);

module.exports = User;