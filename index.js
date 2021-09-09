let timeUtils = require('./time-utils');
let num2cnUtils = require('./num2cn-utils');
let platformUtils = require('./platform-utils');

let utils = {
    ...timeUtils,
    ...num2cnUtils,
    ...platformUtils
};

module.exports = utils;