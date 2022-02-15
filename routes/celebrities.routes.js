const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model');
;
  
  router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
  });

  router.post('/celebrities/create', (req, res, next) => {
    const { name, ocupation, catchPhrase } = req.body;
  
    Celebrity.create({ name, ocupation, catchPhrase })
      .then((createdCelebrity) => {
        console.log('Celebrity created', createdCelebrity.name);
        res.redirect('/celebrities');
      })
      .catch((err) => next(err));
  });

  router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then((allCelebrities) => {
        //console.log(allCelebrities);
        res.render('celebrities/celebrities.hbs', { celebrity: allCelebrities });
      })
      .catch((err) => {
        next(err);
      });
  });


  
module.exports = router;