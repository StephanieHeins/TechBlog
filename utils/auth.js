const withAuth = (req, res, next) => {
  console.log("HelloAuth")
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;