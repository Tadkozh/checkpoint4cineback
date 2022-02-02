
const moviesRouter = require('express').Router();
const {
  findAllMovies,
  findOneMovieById,
  insertMovie,
  updateMovie,
  deleteMovie,
} = require('../models/movies');

moviesRouter.get('/', (req, res) => {
  findAllMovies().then(([movie]) => {
    res.json(movie);
  });
});

moviesRouter.get('/:id', async (req, res) => {
  const [[movie]] = await findOneMovieById(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json();
  }
});

moviesRouter.post('/', async (req, res) => {
  const [{ insertId: id }] = await insertMovie(req.body);
  const newMovie = req.body;
  res.status(201).json({
    id,
    ...newMovie,
  });
});

moviesRouter.put('/:id', async (req, res) => {
  await updateMovie(req.body, req.params.id);
  res.status(204).json();
});

moviesRouter.delete('/:id', async (req, res) => {
  await deleteMovie(req.params.id);
  res.status(204).json();
});

module.exports = moviesRouter;