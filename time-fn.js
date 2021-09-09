let fn = {};

// 时间字符串转年月日，时分秒
fn.yymmddhhmmss = function(str, separate = '/'){
    let str1 = new Date(str);
    let str2 = "";
    str2 += str1.getFullYear();
    str2 += separate;
    str2 += (str1.getMonth() + 1) >= 10 ? (str1.getMonth() + 1) : ("0" + (str1.getMonth() + 1));
    str2 += separate;
    str2 += (str1.getDate() >= 10 ? str1.getDate() : ("0" + str1.getDate()));
    str2 += " ";
    str2 += (str1.getHours() >= 10 ? str1.getHours() : ("0"+str1.getHours()));
    str2 += ":";
    str2 += (str1.getMinutes() >= 10 ? str1.getMinutes() : ("0"+str1.getMinutes()));
    str2 += ":";
    str2 += (str1.getSeconds() >= 10 ? str1.getSeconds() : ("0"+str1.getSeconds()));
    return str2;
};
// 时间字符串转年月日
fn.yymmdd = function(str, separate = '/') {
    let str1 = new Date(str);
    let str2 = "";
    str2 += str1.getFullYear();
    str2 += separate;
    str2 += (str1.getMonth() + 1) >= 10 ? (str1.getMonth() + 1) : ("0"+(str1.getMonth() + 1));
    str2 += separate;
    str2 += (str1.getDate() >= 10 ? str1.getDate() : ("0"+str1.getDate()));
    return str2;
}
// 时间字符串转时分秒
fn.hhmmss = function(str){
    let str1 = new Date(str);
    let str2 = "";
    str2 += (str1.getHours() >= 10 ? str1.getHours() : ("0"+str1.getHours()));
    str2 += ":";
    str2 += (str1.getMinutes() >= 10 ? str1.getMinutes() : ("0"+str1.getMinutes()));
    str2 += ":";
    str2 += (str1.getSeconds() >= 10 ? str1.getSeconds() : ("0"+str1.getSeconds()));
    return str2;
}
// 时间字符串转时间戳
fn.timestamp = function(str){
    let str1 = new Date(str);
    return str1.getTime();
}

module.exports = fn;