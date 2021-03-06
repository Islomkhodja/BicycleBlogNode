const express = require('express');
const router = express();
const users = require('../controllers/users.controller');
const posts = require('../controllers/posts.controller');
const chalk = require('chalk')

const login = require('./admin/login');
const logout = require('./admin/logout');
const register = require('./admin/register')
const article = require('./admin/article');
const pages = require('./admin/pages');
const settings = require('./admin/settings')
// users.isAuth, users.isAdmin, 
router.get('/', (req,res)=> {
  // console.log('dsadagfasdagasdasf',req.user);
  // res.locals.user_name = req.user.user_name
   res.render('admin/index'); //{ user_name: req.user.user_name }
});


router.use('/login', login);
//should be POST
router.use('/logout', logout);
// router.use('/register', register); 
router.use('/article', article);
router.use('/pages', pages);
router.use('/settings', settings);



router.route('/test/tag')
	.get((req, res, next) => {
		
	})


router.get('/settings', (req,res)=> {
	console.log("SETTINGS ROUTE")
  console.log(chalk.red("USER DATA:"), req.user);
  res.render('admin/settings', { user_data: req.user });
});


module.exports = router;