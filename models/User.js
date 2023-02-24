const mongoose =require('mongoose')
const bcrypt =require('bycrypy')


const UserSchema = mongoose.Schema({
    firstName : {type: String , require:true},
    lastName : {type: String , require:true},
    emailAddress: {type: String , require:true},
    password : {type: String , require:true}
    },{
        timestamps : true
    })
    
    // UserSchema.methods.verifyPassword = function(password){
    //     console.log('Verifying:', password)
    //     console.log(this.password)
    //     return bcrypt.compareSync(password, this.password)
    // }
    
    const User = mongoose.model('User',UserSchema)
    module.exports = User;