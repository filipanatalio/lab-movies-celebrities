const router = require("express").Router();

const Movie = require('../models/Movie.model');


router.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movie');
  });

  router.post('/movies/create', (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
  
    Movie.create({ title, genre, plot, cast })
      .then((createdMovie) => {
        console.log('Movie created', createdMovie.title);
        res.redirect('/movies');
      })
      .catch((err) => next(err));
  });

//   router.get('/movies', (req, res, next) => {
//     Movies.find()
//       .then((allMovies) => {
        
//         res.render('movies/movies.hbs', { celebrity: allCelebrities });
//       })
//       .catch((err) => {
//         next(err);
//       });
//   });





module.exports = router;