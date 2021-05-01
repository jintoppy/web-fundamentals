//CommonJS 
//require
//module.exports

const _ = require('lodash');
const utils = require('./util');
// import _ from 'lodash';
// import utils from './util';

const arr = [3, 4, 5, 8, 9, 1, 1];

const firstThreeItems = _.take(arr, 3);

console.log(firstThreeItems);

const result = utils.getFileDetails('trial.txt');

console.log(result);