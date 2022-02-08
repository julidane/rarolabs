const connection = require('./connection');

const createPagination = async(data) => {
  const result = await connection()
  .then((db) => db.collection('pages').insertOne({ paginacao: data }));    
  return result;
}

const readPagination = async() => {
  const result = await connection()
  .then((db) => db.collection('pages').find().toArray());
  return result
}

module.exports = { createPagination, readPagination };
