const path = require('path');

const getFilePath = pathname => {
  return path.join(_dirname, '../../public', path.normalize(pathname));
};

module.exports = {
  getFilePath
};
