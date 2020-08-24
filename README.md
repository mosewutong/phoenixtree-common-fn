## 时间操作插件

### 安装
```
install phoenix-time-change
```

#### 实例
参数:  
    1. timeStr: 时间字符串
        1. type: string/int 
            1. 可以是时间字符串，也可以是'2020-01-01'字符串类型，亦或是'2020-01-01 10:10:10'字符串类型，也可以是时间戳
        2. require: true 
    2. timeType: 转换成字符串的类型
        1. tyep: string
            1. typevalue:
            2. 'yymmddhhmmss':年月日 时分秒;
            3. 'yymmdd'：时分秒;
            4. 'hhmmss': 时分秒;
            5. 'timestamp': 毫秒级时间戳）  
        2. require: true
    3. separate: 
        1. type: string
            1. '年月日中间连接字符串可以使用-,/两种，建议-，默认-'
        2. require: false    
```
const timeChange = require('phoenixtree-time-change');  
let timeStr = new Date('2020-01-01 00:00:00');  
let timeType = 'yymmddhhmmss';  
let str = timeChange.change_time(timeStr,timeType'[,'separate']);  
```