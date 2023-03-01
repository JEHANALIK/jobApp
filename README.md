## Job Portal/ Recruiting Website 

This is a web application for a job portal/recruiting website called "JobApp". It allows job seekers to search and apply for job openings, and employers to post job openings and review applications.

## Features
*	Job seeker can create an account and profile, and search for job openings based on keywords, location, and job type.
*	Employer can create an account and post job openings, and review applications.
*	Admin can manage users, job postings, and applications.

## Technologies Used
*	Backend: Node.js, Express.js, MongoDB, Mongoose,React.js
*	Frontend: HTML, JavaScript, EJS, Bootstrap CSS Framework
*	Database: MongoDB
*   Bcrypt
*   Git + Github


## API Reference
The following routes are available in the application:
*	GET /: Home page.
*	GET /auth/signup: Sign up page.
*	POST /auth/signup: Sign up form submission.
*	GET /auth/signin: Log in page.
*	POST /auth/signin: Log in form submission.
*	GET /index: Dashboard page for logged-in users.
*	GET /user/edit: Edit user profile page.
*	POST /user/edit: Edit user profile form submission.
*	GET /job/viewJob: View job openings page.

 ## Libraries
*	isLoggedIn.js:
This is a custom middleware function that checks if there is a logged-in user or not. If there is no logged-in user, it redirects the user to the sign-in page. Otherwise, it moves to the next step.
*	passportConfig.js:
This file configures passport, a Node.js library used for authentication. It uses a local strategy to authenticate users. Passport stores the user's ID in the session, so it doesn't need to deserialize the entire user object with every request. The code defines the serializeUser() and deserializeUser() methods for storing and retrieving the user ID from the session. It also defines the local strategy for authenticating users with their email address and password. The code uses the User model to search for a user with the given email address and then verifies the password using the verifyPassword() method defined in the User model.

## Route Files
1.	applicant.js
This file contains the routes related to job applicants. It includes:
*	GET /applicant/applyJob: This route is used to render the page for job seekers to apply for a job opening. It uses the applicant_create_get function from the applicantControl module.
2.	auth.js
This file contains the routes related to authentication. It includes:
*	GET /auth/signup: This route is used to render the page for users to sign up for an account. It uses the auth_signup_get function from the authControl module.
*	POST /auth/signup: This route is used to handle the submission of the sign up form. It uses the auth_signup_post function from the authControl module.
*	GET /auth/signin: This route is used to render the page for users to sign in to their account. It uses the auth_signin_get function from the authControl module.
*	POST /auth/signin: This route is used to handle the submission of the sign in form. It uses the auth_signin_post function from the authControl module.


3.	job.js
This file contains the routes related to job postings. It includes:
*	GET /job/viewJob: This route is used to render the page for job seekers to view a job posting. It uses the job_create_get function from the jobCntrl module.
4.	layout.js
This file contains the default route for every page. It includes:
*	GET /: This route is used to render the default layout of the application. It uses the layout_get function from the layoutControl module.
5.	user.js
This file contains the routes related to user profiles. It includes:
*	GET /index: This route is used to render the user's dashboard. It uses the index_get function from the userControl module.
*	GET /user/edit: This route is used to render the page for the user to edit their profile. It uses the user_update_get function from the userControl module.
*	POST /user/edit: This route is used to handle the submission of the user profile update form. It uses the user_update_post function from the userControl module.

 ## Controllers
6.	applicant.js
This file contains the route handlers for job applicants. The following API endpoint is defined:
*	GET /applicant/applyJob: Renders the page where applicants can apply for a job.
7.	auth.js
This file contains the route handlers for authentication. The following API endpoints are defined:
*	GET /auth/signup: Renders the page where users can create a new account.
*	POST /auth/signup: Creates a new user account and redirects to the login page on success. Returns an error message on failure.
*	GET /auth/signin: Renders the login page.
*	POST /auth/signin: Authenticates the user and redirects to the home page on success. Returns an error message on failure.

8.	job.js
This file contains the route handlers for job postings. The following API endpoint is defined:
*	GET /job/viewJob: Renders the page where job seekers can view job postings.
9.	layout.js
This file contains the route handler for the home page. The following API endpoint is defined:
*	GET /: Renders the home page.
10.	user.js
This file contains the route handlers for user profiles. The following API endpoints are defined:
*	GET /user/index: Renders the user profile page.
*	GET /user/edit: Renders the page where users can edit their profile information.
*	POST /user/edit: Updates the user's profile information and redirects to the user profile page on success. Returns an error message on failure.

## Models
Here is an explanation of each model file:
1.	Applicant.js: This file defines the Applicant model schema using Mongoose, which includes the applicant's phone number, CV, and a reference to the User model using a mongoose.Schema.Types.ObjectId. The timestamps option is set to true to automatically record the creation and update timestamps of each applicant document.
2.	Job.js: This file defines the Job model schema using Mongoose, which includes the job title, salary, organization, description, time type, and location. The timestamps option is set to true to automatically record the creation and update timestamps of each job document.
3.	User.js: This file defines the User model schema using Mongoose, which includes the user's first name, last name, email address, and password. The timestamps option is set to true to automatically record the creation and update timestamps of each user document. Additionally, this model includes a method verifyPassword to compare the password entered by the user during the sign-in process with the password stored in the database. The method uses bcrypt to compare the passwords and returns true if they match, and false if they don't.

