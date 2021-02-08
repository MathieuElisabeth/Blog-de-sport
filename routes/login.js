var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blog_sport',
    password: 'nz93dc93',
    port: 5432,
});


router.get('/',function(req,res){
    res.render('login')
});

router.post('/', function(req, res){

    if(!req.body.email || !req.body.password){
        res.render('login', {message: "Please enter both id and password"});
    } else {
        pool.query("SELECT id FROM users WHERE email = $1 AND password = crypt($2, password)",[req.body.email,req.body.password], (error, results) => {
            if (error) {
                throw error
            }
            if(results.rows){
                req.session.loggedin = true;
                req.session.username = req.body.email;
                res.redirect('/admin' );
            }
            res.render('login', {message: "Invalid credentials!"});


        });
    }
});

module.exports = router;