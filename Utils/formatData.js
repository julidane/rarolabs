const formatData = (currentPage, quantity) => {
  let finalData = [];
  const quantityMinusCurrentPage = quantity - currentPage;

  if (quantity <= 5) {
    for (let index = 1; index <= quantity; index ++) {
      index === currentPage ? finalData.push(`**${currentPage}**`) : finalData.push(`${index}`);
    }    
    return finalData;
  }

  if (currentPage <= 3) {
    for (let index = 1; index <= 5; index ++) {
      index === currentPage ? finalData.push(`**${currentPage}**`) : finalData.push(`${index}`);
    }
    finalData.push('...');    
    return finalData;
  }

  if (quantityMinusCurrentPage >= 2) {
    finalData.push('...');
    for (let index = currentPage - 2; finalData.length < 6; index ++) {
    index === currentPage ? finalData.push(`**${currentPage}**`) : finalData.push(`${index}`);
    }
    quantityMinusCurrentPage === 2 ? '' : finalData.push('...');  
    return finalData;
  }

  finalData.push('...');
  for (let index = quantity - 4; finalData.length < 6; index ++) {
    index === currentPage ? finalData.push(`**${currentPage}**`) : finalData.push(`${index}`);
  }  
  return finalData;
};

module.exports = formatData;