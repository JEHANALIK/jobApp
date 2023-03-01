const express = require('express')

const router = express.Router()
router.use(express.urlencoded({ extended: true }));
const authControl = require('../controllers/auth')

router.get('/auth/signup' , authControl.auth_signup_get)
router.post('/auth/signup' , authControl.auth_signup_post)

router.get('/auth/signin' , authControl.auth_signin_get)
router.post('/auth/signin' , authControl.auth_signin_post)

router.get('/auth/logout' , authControl.auth_logout_get)

router.get ('/auth/edit',authControl.auth_update_get)
router.post ('/auth/edit',authControl.auth_update_post)

router.get('/auth/changePass',authControl.auth_changePass_get)
router.post('/auth/changePass', authControl.auth_changePass_post)

router.get('/auth/profile',authControl.auth_profile_get)

module.exports = router