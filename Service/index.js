const model = require('../Models');

const createPagination = async(currentPage, quantity) => {
    const data = [currentPage, quantity];
    const result = await model.createPagination(data)
    return result;
};

const readPagination = async() => {
    const result = await model.readPagination();
    return result;
};

module.exports = { createPagination, readPagination };