//Model
const Job = require('../models/Job')

//CRUD API's

//HTTP GET - load article form
exports.job_create_get = (req, res) => {
    console.log('ok')
    res.render('job/addJobOffers')
}

// HTTP post - addjobOffer
exports.job_create_post = (req, res) => {
    console.log('Job Controller Post Body: ', req.body);
    let job = new Job(req.body);
    //   save
    job.save()
        .then(() => {
            res.redirect("MyJobOffers")
        })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later!");
        })
}

// HTTP GET - User home
exports.job_viewJobPage_get = (req, res) => {
    Job.find()
    // .populate('applicant')
        .then(jobs => {
            res.render("job/viewJob", { jobs }) // job: addjobOffers
        })
        .catch(err => {
            console.log(err);
        })
}

// HTTP GET - job By ID
exports.job_edit_get = (req, res) => {
    Job.findByIdAndUpdate(req.query.id)
        .then(job => {
            // console.log(job.detail)
            res.render("job/editJob", { job });
        })
        .catch(err => {
            console.log(err);
        })
}

// HTTP POST- JOb by ID

exports.job_edit_post = (req, res) => {
    Job.findByIdAndUpdate(req.body.id, req.body)
        .then(()=> {
            res.redirect("/job/myJobOffers" );
        })
        .catch(err => {
            console.log(err);
        })
}

exports.job_show_get = (req, res) => {
    Job.findById(req.query.id)
        .then(job => {
            res.render("job/detail", { job });
        })
        .catch(err => {
            console.log(err);
        })
}

// HTTP DELETE - job
exports.job_delete_get = (req, res) => {
    Job.findByIdAndDelete(req.query.id)
        .then(() => {
            res.redirect("/job/myJobOffers")
        })
        .catch(err => {
            console.log(err);
        })
}

//  HTTP GET - load user jop offers
exports.job_viewJobOffer_get = (req, res) => {
    Job.find()
        .then(jobs => {
            res.render('job/MyJobOffers', { jobs })
        })
        .catch((err) => {
            console.log(err);
            res.send('please try again later')
        })

}

