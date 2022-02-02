const authorsRouter = require('express').Router();
const authorModel = require('../models/authors');
const moviesModel = require('../models/movies');

authorsRouter.get('/', async (req, res) => {
  const [authors] = await authorModel.findAll();
  res.json(authors);
});

authorsRouter.get('/:id', async (req, res) => {
  const [[author]] = await authorModel.findOneById(req.params.id);
  if (!author) res.status(404).json();
    res.json(author);
});

authorsRouter.get('/:id/movies', async (req, res) => {
  const [movies] = await moviesModel.findOneByAuthor(req.params.id)
  res.json(movies);
});

authorsRouter.post('/', async (req, res) => {
  const [{ insertId: id }] = await authorModel.insertOne(req.body);
  res.status(201).json({
    id,
    ...req.body
  });
});

authorsRouter.put('/:id', async (req, res) => {
  await authorModel.updateOne(req.body, req.params.id);
  res.status(204).json();
});

authorsRouter.delete('/:id', async (req, res) => {
  await authorModel.deleteOne(req.params.id);
  res.status(204).json();
});

module.exports = authorsRouter;