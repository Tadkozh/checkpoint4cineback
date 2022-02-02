const connection = require('../db-config');

const findAllAuthors = () => connection.promise().query('SELECT * FROM authors');

const findOneAuthorById = (id) =>
  connection.promise().query('SELECT * FROM authors WHERE id = ?', [id]);

const insertAuthor = ({ firstname, lastname, photoAutUrl, wikipediatUrl }) =>
  connection
    .promise()
    .query(
      'INSERT INTO authors (firstname, lastname, photoAutUrl, wikipediatUrl) VALUES (?, ?, ?, ?)',
      [firstname, lastname, photoAutUrl, wikipediatUrl]
    );

const updateAuthor = (object, id) =>
  connection.promise().query('UPDATE authors SET ? WHERE id = ?', [object, id]);

const deleteAuthor = (id) =>
  connection.promise().query('DELETE FROM authors WHERE id = ?', [id]);

module.exports = {
  findAllAuthors,
  findOneAuthorById,
  insertAuthor,
  updateAuthor,
  deleteAuthor,
};