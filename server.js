// Importing the 'express' module
const express = require('express')
// Importing the 'mongoose' module
const mongoose = require('mongoose')

// Importing the 'express-session' module
const session = require('express-session')

// Importing the 'passport' module in the place where we config in
const passport = require('./lib/passportConfig')

// Setting the port number for our server
const PORT = 4000

// Initializing our application by creating an instance of the Express module
const app = express()

app.use(express.static(__dirname + '/public'));

//initilize express layout
const expressLayouts = require('express-ejs-layouts')

// look into views folder with a file name called layout.ejs
app.use(expressLayouts)

// most important thing     
require('dotenv').config();

//import routes
const layoutRouter = require('./routes/layout')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const jobRouter = require('./routes/job')
const applicantRouter = require('./routes/applicant')

//uses the session library and sort our session
app.use(session({
     secret: 'supersecuresecret!',
     saveUninitialized: true,
     resave: false,
     cookie: {maxAge: 604800}
 }))
 app.use(passport.initialize())
 app.use(passport.session())

 // adding this middleWare to take user info
 app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 })


//mount route
app.use('/' , layoutRouter)
app.use('/' , userRouter)
app.use('/', authRouter)
app.use('/', jobRouter)
app.use('/', applicantRouter)

// Starting the server and listening for incoming requests on the specified ports
app.listen(PORT, ()=>{
    console.log(`Job app is running on ${PORT}`)
})

//Ignore warnings
mongoose.set('strictQuery', false)

//set engine - look into the views folder to ejs files
app.set('view engine' , 'ejs')


//database connection
const dbURI = process.env.DATABASE_URI //we put this instead of putting the db because we want to ignore it so we take it from .env 
// console.log(process.env.DATABASE_URI)

mongoose.connect(dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true

},
// Callback function that will be executed once the connection is established
()=>{
    console.log("MongoDB Connected")
})


