const express = require('express');
const router = express.Router();

router.use('/about', (req, res, next) => {
  console.log('this is about');
  next();
});

router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'about',
    message: 'about pages'
  });
});

module.exports = router;