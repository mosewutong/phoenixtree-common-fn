let fn = require('./fn');
let time_change = {};

time_change.name = '时间操作';

time_change.change_time = function(timeStr,type,separate){
    if(type === 'yymmddhhmmss') return fn.yymmddhhmmss(timeStr,separate);
    if(type === 'yymmdd') return fn.yymmdd(timeStr,separate);
    if(type === 'hhmmss') return fn.hhmmss(timeStr);
    if(type === 'timestamp') return fn.timestamp(timeStr);
}

// 获取传入时间对应当月的天数
time_change.get_month_number = function(timeStr){
    let time = new Date(timeStr);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    if(month !== 2){
        if([1,3,5,7,8,10,12].includes(month)){
            return 31;
        }else{
            return 30;
        }
    }
    if((year%400===0) || (year%4===0 && year%100!==0)){
        return 29;
    }
    return 28;
}

// let result = time_change.get_month_number('1900-02-02');
// console.log(result);
module.exports = time_change;