const fs = require('fs');
// import fs from 'fs';

const getFileDetails = (fileName) => {
    return fs.readFileSync(fileName, 'utf-8');
};

const utils = {
    getFileDetails: getFileDetails
};

// export default utils;
module.exports = utils;
