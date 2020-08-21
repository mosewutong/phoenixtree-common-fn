let v1 = require('./v1');
let time_change = {};

time_change.name = '时间操作';

time_change.change_time = function(timeStr,type,separate){
    if(type === 'yymmddhhmmss') return v1.yymmddhhmmss(timeStr,separate || '-');
    if(type === 'yymmdd') return v1.yymmdd(timeStr,separate || '-');
    if(type === 'hhmmss') return v1.yymmdd(timeStr);
    if(type === 'timestamp') return v1.timestamp(timeStr);
}

module.exports = time_change;