const connection = require('../db-config');

const findAllMovies = () => connection.promise().query('SELECT * FROM movies');

const findOneMovieById = (id) =>
  connection.promise().query('SELECT * FROM movies WHERE id = ?', [id]);

const insertMovie = ({ title, year, duration, country, genre, photoMovUrl, movieUrl, authorId }) =>
  connection
    .promise()
    .query(
      'INSERT INTO movies (title, year, duration, country, genre, photoMovUrl, movieUrl, authorId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, youtube_url, id_album]
    );

const updateMovie = (object, id) =>
  connection.promise().query('UPDATE movies SET ? WHERE id = ?', [object, id]);

const deleteMovie = (id) =>
  connection.promise().query('DELETE FROM movies WHERE id = ?', [id]);

module.exports = {
  findAllMovies,
  findOneMovieById,
  insertMovie,
  updateMovie,
  deleteMovie,
};