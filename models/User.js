const mongoose = require('mongoose')
const bcrybt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    emailAddress: {type: String, required: true},
    password: {type: String, required: true}
},{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password){
    console.log('verifying' , password)
    console.log(this.password)
    // compares the password that we passed and the this.password is in userSchema that the user entered
    return bcrybt.compareSync(password, this.password)
}

const User = mongoose.model('User' , userSchema)

module.exports = User