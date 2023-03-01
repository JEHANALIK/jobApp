const mongoose = require('mongoose')

const applicantSchema = mongoose.Schema({
    phone: {type:String , require},
    CV: {type:String , require},
    job: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }],
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

},{
    timestamps: true
})

//Model
const Applicant = mongoose.model('Applicant' , applicantSchema)

//export
module.exports = Applicant