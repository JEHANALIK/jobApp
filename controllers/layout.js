const Job = require('../models/Job')
// Get home Page
exports.layout_get = (req,res) => {
    Job.find()
    .then(jobs=> {
        console.log("jobs", jobs)
        res.render("home/index", {jobs}) // job: addjobOffers
   })
   .catch(err => {
       console.log(err);
   })
}
