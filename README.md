## 时间操作插件

### 安装
```
install phoenix-time-change
```

#### 实例
参数:  

1. timeStr: 时间字符串  
    type: string/int  
        可以是时间字符串，也可以是'2020-01-01'字符串类型，亦或是'2020-01-01 10:10:10'字符串类型，也可以是时间戳  
    require: true  

2. timeType: 转换成字符串的类型  
    tyep: string  
        typevalue:  
        yymmddhhmmss':年月日 时分秒;  
        'yymmdd'：时分秒;  
        'hhmmss': 时分秒;  
        'timestamp': 毫秒级时间戳）    
    require: true  

3. separate:  
    type: string  
        '年月日中间连接字符串可以使用-,/两种，建议-，默认-'  
    require: false
  

```
const timeChange = require('phoenixtree-time-change');  
let timeStr = new Date('2020-01-01 00:00:00');  
let timeType = 'yymmddhhmmss';  
let str = timeChange.change_time(timeStr,timeType'[,'separate']);  
```