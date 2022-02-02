const connection = require('../db-config');

const TABLE = 'authors';

const findAll = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

const findOneById = (id) =>
  connection.promise().query(`SELECT * FROM ${TABLE} WHERE id = ?`, [id]);

const insertOne = ({ firstname, lastname, photoAutUrl, wikipediatUrl }) =>
  connection
    .promise()
    .query(
      `INSERT INTO ${TABLE} (firstname, lastname, photoAutUrl, wikipediatUrl) VALUES (?, ?, ?, ?)`,
      [firstname, lastname, photoAutUrl, wikipediatUrl]
    );

const updateOne = (object, id) =>
  connection.promise().query(`UPDATE ${TABLE} SET ? WHERE id = ?`, [object, id]);

const deleteOne = (id) =>
  connection.promise().query(`DELETE FROM ${TABLE} WHERE id = ?`, [id]);

module.exports = {
  findAll,
  findOneById,
  insertOne,
  updateOne,
  deleteOne,
};