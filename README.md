## 时间操作插件

#### 安装
```
npm install phoenix-time-change
```
### Example
##### change_time(timeStr,timeType[,separate])
参数:  

1. timeStr: 时间字符串  
    - type: string/int  
        - 可以是时间字符串，也可以是'2020-01-01'字符串类型，亦或是'2020-01-01 10:10:10'字符串类型，也可以是时间戳  
    - require: true  
        - 是否必填 必填

2. timeType: 转换成字符串的类型  
    - tyep: string  
        typevalue:  
        - yymmddhhmmss':年月日 时分秒;  
        - 'yymmdd'：年月日;  
        - 'hhmmss': 时分秒;  
        - 'timestamp': 毫秒级时间戳    
    - require: true  
        - 是否必填 必填   

3. separate:  
    - type: string  
        - '年月日中间连接字符串可以使用-,/两种，建议-，默认-'  
    - require: false
        - 是否必填 不必填  

```
// 引入插件
const timeChange = require('phoenixtree-time-change');  
// 生成需要转换的时间字符串
let timeStr = new Date('2020-01-01 00:00:00');  
// 写入转换类型 所有类型在参数列表中有详细列举
let timeType = 'yymmddhhmmss';  
// 调用插件时间转换固定格式字符串
let str = timeChange.change_time(timeStr,timeType','-');  
```