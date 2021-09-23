let number = {};

// 对金额格式化，每三位加一个逗号，保留两位小数
number.initNum = function(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');;
}

module.exports = number;