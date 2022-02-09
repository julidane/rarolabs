const Joi = require('joi');
const model = require('../Models');
const BAD_REQUEST = 400;
const formatData = require('../Utils/formatData');

const schema = Joi.object({
  currentPage: Joi.number().required(),
  quantity: Joi.number().required(),
});

const validateError = (status, message) => ({
  status, 
  message,
});

const createPagination = async(currentPage, quantity) => {
  const { error } = schema.validate({ currentPage, quantity });
  if (error) throw validateError(BAD_REQUEST, error.message);
  const data = formatData(currentPage, quantity);
  const result = await model.createPagination(data)
  return result;
};

const readPagination = async() => {
  const result = await model.readPagination();
  return result;
};

module.exports = { createPagination, readPagination };