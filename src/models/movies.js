const connection = require('../db-config');

const TABLE = 'movies';

const findAll = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

const findOneById = (id) =>
  connection.promise().query(`SELECT * FROM ${TABLE} WHERE id = ?`, [id]);

const insertOne = ({ title, year, duration, country, genre, photoMovUrl, movieUrl, authorId }) =>
  connection
    .promise()
    .query(
      `INSERT INTO ${TABLE} (title, year, duration, country, genre, photoMovUrl, movieUrl, authorId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, year, duration, country, genre, photoMovUrl, movieUrl, authorId]
    );

const updateOne = (object, id) =>
  connection.promise().query(`UPDATE ${TABLE} SET ? WHERE id = ?`, [object, id]);

const deleteOne = (id) =>
  connection.promise().query(`DELETE FROM ${TABLE} WHERE id = ?`, [id]);

const findOneByAuthor = (authorId) => connection.promise().query(`SELECT * FROM ${TABLE} WHERE authorId = ?`, [authorId])

module.exports = {
  findAll,
  findOneById,
  insertOne,
  updateOne,
  deleteOne,
  findOneByAuthor,
};