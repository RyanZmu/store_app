Application Project Outline:

Frontend Tools:
- React
- CSS/HTML
- Formik
- Auth0
- React Bootstrap
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

Current Work (1-5 for difficulty):
- Display active filters and allow user to click X and remove the filter - implement after Price Range filtering is added (3)
- Add alerts for login/logout (1)
- Consider function for when a user completes login, hide the Login button and replace with the profile componenet, so Log In wont be an option if already Logged in (2)
- Work on hovering animation for cart - show inventory when hovering (3)
- Remove cart alert when adding items to the cart via the cart page (not needed) (1)
- Refactor all functions used in App.js into appropiate components, Cart, Search and API are handled from the top of level of the app, will be easier to maintain if this logic is moved to seperate components, do one at a time.(API now moved) (4)
- Save cart data to users if logged in (5) - add new Cart data table to DB to save all users cart data, will need API logic to do these tasks, submitting an order will clear the users cart data.
- Look into using tsParticles library for creating a confetti effect when a user submits their cart
- Create a mock payment form for user - for now just clear the cart and say Payment Accepted - (possibly use bootstrap Offcanvas item for the checkout form) - later when we have cart in a database, this will clear the users cart and send a fake email to signed in users email or provided email (3) email part (4)
- Consider changing Cart Alert to a transition text after Add to Cart is pressed, could look more clean overall (2)

Current Issues:
- All functionality is good for now, work on implementing new features

Application Expectations:
- App will have an REST API that I will create with Node and Postman, just a very basic API
- Terraform will be used to provision the EC2 instance, look at course’s lesson deploying an app with TF so we can both deploy the server and app at the same time.
- Jenkins will look at our repo for the application and do a git pull whenever it detects a git push has happened, giving CI/CD
- Frontend will be  quite basic, mostly Bootstrapper elements and at least three different pages to route to.
- Express will handle routing, will need to refresh myself a bit
- Use Ansible Molecule to run some automated tests to ensure API and other functionallity is working when code is added via Jenkins Pipeline


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