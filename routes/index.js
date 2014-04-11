var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'VoteAnon' });
});

router.route('/create')
.get(function(req, res) {
  res.render('create', { title: 'VoteAnon: create poll' });
})
.post(function(req, res) {
  res.render('confirm_create', { title: 'VoteAnon: poll created' });
});

module.exports = router;
