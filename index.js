let timeUtils = require('./time-utils');
let num2cnUtils = require('./num2cn-utils');
let platformUtils = require('./platform-utils');
let stringCommonUtils = require('./string-common-utils');
let numberCommonUtils = require('./number-common-utils');

let utils = {
    ...timeUtils, // 时间操作
    ...num2cnUtils, // 数字转中文
    ...platformUtils, // 平台判断
    ...stringCommonUtils, // 字符串通用函数
    ...numberCommonUtils, // 数字通用函数
};

module.exports = utils;