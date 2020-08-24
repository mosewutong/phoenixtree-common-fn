## 时间操作插件

### 安装
```
install phoenix-time-change
```

#### 实例
参数:  
    timeStr: 时间字符串  
    timeType: 转换成字符串的类型（'yymmddhhmmss':年月日 时分秒；'yymmdd'：时分秒；'hhmmss': 时分秒；'timestamp': 毫秒级时间戳）  
    separate: '年月日中间连接字符串可以使用-,/两种，建议-'    
```
const timeChange = require('phoenixtree-time-change');  
let timeStr = new Date('2020-01-01 00:00:00');  
let timeType = 'yymmddhhmmss';  
let str = timeChange.change_time(timeStr,timeType'[,'separate']);  
```