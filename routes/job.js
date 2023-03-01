
const express = require('express')
const router = express.Router()

const jobCntrl = require('../controllers/jobs')

router.get("/job/addJobOffers", jobCntrl.job_create_get)
router.post("/job/addJobOffers", jobCntrl.job_create_post)

router.get("/job/viewJob", jobCntrl.job_viewJobPage_get);

router.get("/job/editJob", jobCntrl.job_edit_get);
router.post("/job/editJob", jobCntrl.job_edit_post);

router.get("/job/detail", jobCntrl.job_show_get)
router.get("/job/delete", jobCntrl.job_delete_get);

router.get("/job/MyJobOffers",jobCntrl.job_viewJobOffer_get)
// router.post("/job/myJobOffer",jobCntrl.job_view_post)

module.exports= router

