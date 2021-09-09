let fn = require('./time-fn');
let time_change = {};

time_change.change_time = function(timeStr, type, separate) {
    if(type === 'yymmddhhmmss') return fn.yymmddhhmmss(timeStr, separate);
    if(type === 'yymmdd') return fn.yymmdd(timeStr, separate);
    if(type === 'hhmmss') return fn.hhmmss(timeStr);
    if(type === 'timestamp') return fn.timestamp(timeStr);
}

// 获取传入时间对应当月的天数
time_change.get_month_number = function(timeStr) {
    let time = new Date(timeStr);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    if(month !== 2) {
        if([1, 3, 5, 7, 8, 10, 12].includes(month)){
            return 31;
        } else {
            return 30;
        }
    }
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return 29;
    }
    return 28;
}

// 根据生日计算年龄 参数：19951202
time_change.computed_age = function(str) {
    if (!str) {
        return 0;
    }
    const birthday = str;
    let age = '';
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    age = year - birthday.substr(0, 4);
    if (month * 1 === birthday.substr(4, 2) * 1) {
        if (day * 1 < birthday.substr(6, 2) * 1) {
            age -= 1;
        }
    } else if (month * 1 < birthday.substr(4, 2) * 1) {
        age -= 1;
    }
    return age;
}

module.exports = time_change;