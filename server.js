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


//import routes
const layoutRouter = require('./routes/layout')
const userRouter = require('./routes/user')


//uses the session library and sort our session
// app.use(session({
//     secret: 'supersecuresecret!',
//     saveUninitialized: true,
//     resave: false,
//     cookie: {maxAge: 604800}
// }))
// app.use(passport.initialize())
// app.use(passport.session())


//mount route
app.use('/' , layoutRouter)
app.use('/' , userRouter)

// Starting the server and listening for incoming requests on the specified ports
app.listen(PORT, ()=>{
    console.log(`Blog app is running on ${PORT}`)
})

//Ignore warnings
mongoose.set('strictQuery', false)

//set engine - look into the views folder to ejs files
app.set('view engine' , 'ejs')


//database connection
const dbURI = process.env.DATABASE_URI //we put this instead of putting the db because we want to ignore it so we take it from .env 

mongoose.connect(dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true

},
// Callback function that will be executed once the connection is established
()=>{
    console.log("MongoDB Connected")
})


