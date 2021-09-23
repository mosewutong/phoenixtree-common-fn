let string = {};

// 对字符串加入间隔，间隔数量和间隔符号可自定义
string.join_space = function(str, spaceNum = 4, space = ' ') {
  let result = '', counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
      counter++;
      result = str.charAt(i) + result;
      if (!(counter % spaceNum) && i != 0) {
          result = `${space}` + result;
      }
  }
  return result;
}

module.exports = string;