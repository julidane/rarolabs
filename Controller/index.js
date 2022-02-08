const service = require('../Service');

const createPagination = async (req, res, _next) => {    
  const { currentPage, quantity } = req.body;
  const result = await service.createPagination(currentPage, quantity);    
  return res.status(200).send(result);
};

const readPagination = async (_req, res, _next) => {
  const result = await service.readPagination();
  return res.status(200).send(result);
};

module.exports = { createPagination, readPagination };