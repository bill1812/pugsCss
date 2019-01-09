const express = require('express');
const router  = express.Router();

/* GET home page: ES6 support */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/ball', function(req, res, next) {
  res.render('billiard', { title: 'codepen.io/jakealbaugh/pen/QOLgev' });
});

router.get('/music', (req, res, next) => {
  res.render('music', { title: 'codepen.io/jakealbaugh/pen/NAjdLY' });
});

module.exports = router;
