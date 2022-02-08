const service = require('../Service');
const CREATED = 201;
const OK = 200;

const createPagination = async (req, res, next) => {   
  try {
    const { currentPage, quantity } = req.body;
    const result = await service.createPagination(currentPage, quantity);    
    return res.status(CREATED).send(result);
  } catch(err) {
    console.log('error createPagination Controller', err.message);
    return next(err);
  }
};

const readPagination = async (_req, res, next) => {
  try {
    const result = await service.readPagination();
    return res.status(OK).send(result);
  } catch (err) {
    console.log('error readPagination Controller', err.message);
    return next(err);
  }
};

module.exports = { createPagination, readPagination };