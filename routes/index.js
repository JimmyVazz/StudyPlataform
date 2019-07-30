const express = require('express');
const router  = express.Router();
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Login de usuarios vista*/
router.get('/login', (req, res) =>{
  res.render('login')
})
/* Login de usuarios READ */

/* Registro de usuarios vista */
router.get('/registro', (req, res) => {
  res.render('registro')
})
/* Registro de usuarios CREATE */
router.post('/registro', async(req, res) => {
  User.create(req.body)
  .then(user => {
    res.redirect('/login')
  }).catch(e => res.render('error'))



})

module.exports = router;
