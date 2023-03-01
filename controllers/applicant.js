const Applicant = require('../models/Applicant')
const Job = require('../models/Job')

// HTTP GET - render to apply job form
exports.applicant_applyJobform_get = (req, res) => {
    res.render('applicant/applyJob', {JobId : req.query.id })
}

//HTTP POST - send info to mangodb
exports.applicant_applyJobform_post = (req, res) => {
    let applicant = new Applicant(req.body)
    console.log(`hello i am the user id : ${req.body.user}`)
    console.log(`job id  : ${req.body.job}`)
    applicant.save()
    Job.findByIdAndUpdate(
        { _id: req.body.job },
        { $push: { 'applicant': req.body.user } },
    )
        .then(() => {
            res.redirect('/applicant/viewApplyJob',)
        })
        .catch((err) => {
            console.log(err)
            res.send('missing input or wrong! please try again!')
        })
}


//HTTP GET - load applicant form
exports.applicant_viewApplyJob_get = (req, res) => {
    Applicant.find().populate('job')
    .then(applicants => {
        res.render('applicant/viewApplyJob',{applicants})
    })
    .catch((err) => {
        console.log(err);
        res.send('please try again later')
    })

}

