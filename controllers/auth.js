//packages
const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('../lib/passportConfig')


//signup - GET
exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}


//signup - POST
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body)
    console.log(user)
    let hash = bcrypt.hashSync(req.body.password, 8)
    user.password = hash

    user.save()
        .then(() => {
            res.redirect('/auth/signin')
        })
        .catch((err) => {
            console.log(err)
            res.send('missing input or wrong! please try again!')
        })
}


//signin - GET
exports.auth_signin_get = (req, res) => {
    res.render('auth/signin')
}


// authonticating for sigin -POST
exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: '/job/viewJob', //this is like the home page
    failureRedirect: '/auth/signin'
})


//log out
exports.auth_logout_get = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
    })
    res.redirect('/')
}
//HTTP EDIT User - GET
exports.auth_update_get = (req, res) => {
    console.log(req.user._id)
    // console.log(req.body.id)
    User.findByIdAndUpdate(req.user._id)

        .then(users => {
            res.render('auth/edit', { users })
        })
        .catch(err => {
            console.log(err)
        })

}
//HTTP edit user post
exports.auth_update_post = (req, res) => {
    console.log(req.body.id)
    User.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
            res.redirect("/auth/profile")
        })
        .catch(err => {
            console.log(err)
        })
}

//HTTP edit pass - GET
exports.auth_changePass_get = (req, res) => {
    User.findByIdAndUpdate(req.user._id)

        .then(users => {
            res.render('auth/changePass', { users })
        })
        .catch(err => {
            console.log(err)
        })
}
let hashedPass
//HTTP edit password - Post
exports.auth_changePass_post = (req, res) => {
    if (req.body.Password !== req.body.Password2) {
        return res.send('wrong !')
    }
    hashedPass = bcrypt.hashSync(req.body.Password, 8)
    User.findByIdAndUpdate(req.body.id, { password: hashedPass })

        .then(() => {
            res.redirect('/auth/profile')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.auth_profile_get = (req,res) => {
     User.findById(req.user._id)
     
     .then(user => {
        res.render('auth/profile', { user })
    })
    .catch(err => {
        console.log(err)
    })
}