const mongoose = require('mongoose')

const applicantSchema = mongoose.Schema({
    phone: String,
    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

},{
    timestamps: true
})

//Model
const Applicant = mongoose.model('Applicant' , articleSchema)

//export
module.exports = Applicant