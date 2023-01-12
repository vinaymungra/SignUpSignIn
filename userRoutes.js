const UserSignupController = require('./userController')

const express = require('express');
const routes = express.Router();

routes.post('/signup', UserSignupController.SignUp);
//login
routes.post('/login', UserSignupController.Login);

module.exports = routes;
