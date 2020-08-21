let fn = require('./fn');
let time_change = {};

time_change.name = '时间操作';

time_change.change_time = function(timeStr,type,separate){
    if(type === 'yymmddhhmmss') return fn.yymmddhhmmss(timeStr,separate);
    if(type === 'yymmdd') return fn.yymmdd(timeStr,separate);
    if(type === 'hhmmss') return fn.hhmmss(timeStr);
    if(type === 'timestamp') return fn.timestamp(timeStr);
}

module.exports = time_change;