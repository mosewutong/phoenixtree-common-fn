## 通用函数组件

PS:当使用非必填参数时，须填写参数完整;

#### 安装
```
npm install phoenixtree-common-fn
```

```
功能目录：
1.时间转字符串函数 change_time;
2.获取某一月份有多少天函数 get_month_number;
3.根据生日，计算年龄 computed_age;
4.将金额数字转换为对应的中文大写 num2cn_utils;
5.对字符串加入间隔，间隔数量和间隔符号可自定义 join_space;
6.对金额格式化，每三位加一个逗号，保留两位小数 initNum;
```

### Example
##### 1.时间转字符串函数change_time(timeStr,timeType[,separate])
    参数: 

    1. timeStr: 时间字符串  
        type: string/int
        
        示例：
        可以是时间字符串，
        也可以是'2020-01-01'字符串类型，
        亦或是'2020-01-01 10:10:10'字符串类型，
        也可以是时间戳  

        require: true  

    2. timeType: 转换成字符串的类型  
        tyep: string  

        示例：
        - yymmddhhmmss:年月日 时分秒;  
        - yymmdd：年月日;  
        - hhmmss: 时分秒;  
        - timestamp: 毫秒级时间戳   

        require: true  

    3. separate:  
        type: string 
        
        示例：年月日中间连接字符串可以使用-,/两种，建议/，默认/  
        
        require: false

```
const utils = require('phoenixtree-common-fn');  

let timeStr = new Date('2020-01-01 00:00:00');  

let timeType = 'yymmddhhmmss';  

let str = utils.change_time(timeStr,timeType','/');  
```

##### 2.获取某一月份有多少天函数get_month_number(timeStr)
    参数： 

    1. timeStr: 
        type: string/int 
        
        示例：时间字符串或者时间戳

        require: true

```
const utils = require('phoenixtree-common-fn');  

let timeStr = new Date('1900-02-01');

let month_number = utils.get_month_number(timeStr); 
```

##### 3.根据生日，计算年龄 computed_age(birthday)
    参数：
    1. birthday:
        type: String
        
        示例：'20200101'

        require: true


```
const utils = require('phoenixtree-common-fn');  

let age = utils.computed_age('20200101'); 
```

##### 4.将金额数字转换为对应的中文大写 num2cn_utils(money)
    参数：
    1. money
        type: Number

        示例：2020.22

        require: true

```
const utils = require('phoenixtree-common-fn');  

let age = utils.num2cn_utils(2020.22); 
```

##### 5.对字符串加入间隔，间隔数量和间隔符号可自定义 join_space(str, spaceNum = 4, space = ' ')
    参数：
    1. str
        type: String

        示例：'abcdefghijk'

        require: true
    
    2. spaceNum: 字符串的间隔数量
        type: Number

        示例: 4

        require: false
    
    3. space: 字符串的间隔符号
        type: String

        示例: ' ', ',', '/'....

        require: false

```
const utils = require('phoenixtree-common-fn');  

let age = utils.join_space('abcdefghijk'); 
```

##### 6.对金额格式化，每三位加一个逗号，保留两位小数 initNum(num)
    参数：
    1. str
        type: String

        示例：'abcdefghijk'

        require: true
    
```
const utils = require('phoenixtree-common-fn');  

let age = utils.initNum(123456789); 
```
