
const moviesRouter = require('express').Router();
const moviesModel = require('../models/movies');

moviesRouter.get('/', async (req, res) => {
  const [movies] = await moviesModel.findAll();
  res.json(movies);
});

moviesRouter.get('/:id', async (req, res) => {
  const [[movie]] = await moviesModel.findOneById(req.params.id);
  if (!movie) res.status(404).json();
  res.json(movie)
});

moviesRouter.post('/', async (req, res) => {
  const [{ insertId: id }] = await moviesModel.insertOne(req.body);
  res.status(201).json({
    id,
    ...req.body
  });
});

moviesRouter.put('/:id', async (req, res) => {
  await moviesModel.updateOne(req.body, req.params.id);
  res.status(204).json({
    body: req.body,
    id: req.params.id
  });
});

moviesRouter.delete('/:id', async (req, res) => {
  await moviesModel.deleteOne(req.params.id);
  res.status(204).json();
});

module.exports = moviesRouter;