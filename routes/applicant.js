const express = require('express')
const router = express.Router()

const applicantControl = require('../controllers/applicant')



router.get('/applicant/applyJob' ,applicantControl.applicant_applyJobform_get )
router.post('/applicant/applyJob' ,applicantControl.applicant_applyJobform_post)
router.get("/applicant/viewApplyJob", applicantControl.applicant_viewApplyJob_get)

module.exports = router
