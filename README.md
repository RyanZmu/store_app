Application Project Outline:

Frontend Tools:
- React
- CSS/HTML
- Formik
- Auth0
- Bootstrapper
- React Router Dom

Backend Tools:
- Node.js
- Express
- MongoDB
- Mongoose
- Postman
- Terraform - Instance Provisioning
- Jenkins - CI/CD
- Ansible


Application Expectations:
- App will have an REST API that I will create with Node and Postman, just a very basic API
- Terraform will be used to provision the EC2 instance, look at course’s lesson deploying an app with TF so we can both deploy the server and app at the same time.
- Jenkins will look at our repo for the application and do a git pull whenever it detects a git push has happened, giving CI/CD
- Frontend will be  quite basic, mostly Bootstrapper elements and at least three different pages to route to.
- Express will handle routing, will need to refresh myself a bit
- Ansible may come into play later on, not quite sure how yet but maybe we can add some monitoring tools to the server for some security reasons.


					Store Application

MVP Features:
- Landing page with Banner,Nav bar, main content area
- Store page with listings of various goods for sale
- Login page with SSO
- Cart feature, have this be saved to the users account so they can reload, or re-login and still have their carts ready. Allow to remove item from carts by Quantity. Drop down and its own page.
- 5-Star reviews

Stretch Goals:
- Let users Login//out from the navbar without needing to go to the login page, also display user’s name and when clicked have a menu of options come down for the user
- Create an admin user who can delete reviews that are against TOS
- Manipulative review scores