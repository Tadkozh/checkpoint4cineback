const authorsRouter = require('express').Router();
const {
  findAllAuthors,
  findOneAuthorById,
  insertAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../models/authors');

authorsRouter.get('/', (req, res) => {
  findAllAuthors().then(([author]) => {
    res.json(author);
  });
});

authorsRouter.get('/:id', async (req, res) => {
  const [[author]] = await findOneAuthorById(req.params.id);
  if (author) {
    res.json(author);
  } else {
    res.status(404).json();
  }
});

authorsRouter.post('/', async (req, res) => {
  const [{ insertId: id }] = await insertAuthor(req.body);
  const newAuthor = req.body;
  res.status(201).json({
    id,
    ...newAuthor,
  });
});

authorsRouter.put('/:id', async (req, res) => {
  await updateAuthor(req.body, req.params.id);
  res.status(204).json();
});

authorsRouter.delete('/:id', async (req, res) => {
  await deleteAuthor(req.params.id);
  res.status(204).json();
});

module.exports = authorsRouter;