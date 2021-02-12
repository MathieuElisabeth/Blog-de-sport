var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/acceuil', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
  if(req.session.loggedin){
    res.render('pages/admin');
  } else {
    res.redirect('/connexion')
  }
});

module.exports = router;
