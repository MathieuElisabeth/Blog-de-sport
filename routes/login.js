var express = require('express');
var router = express.Router();
require('dotenv').config()

const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


router.get('/',function(req,res){
    res.render('pages/connexion')
});

router.post('/', function(req, res){

    if(!req.body.email || !req.body.password){
        res.render('pages/connexion', {message: "Veuillez entrez votre identifiant et votre mot de passe"});
    } else {
        pool.query("SELECT id FROM users WHERE email = $1 AND password = crypt($2, password)",[req.body.email,req.body.password], (error, results) => {
            if (error) {
                throw error
            }
            if(results.rows.length > 0){
                req.session.loggedin = true;
                req.session.username = req.body.email;
                res.redirect('/admin');
            }
            res.render('pages/connexion', {message: "Identifiants incorrects"});


        });
    }
});

module.exports = router;