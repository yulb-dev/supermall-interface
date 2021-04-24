# 前言

这是[supermall](https://github.com/yulb-dev/supermall)的后台接口项目地址

## 技术栈

```
node + express + mongodb(mongoose)
```

## 项目运行

运行前:
1、请确保你已经启动 mongodb 数据库服务并恢复数据库文件

```
//恢复数据库文件：
mongorestore -h localhost:27017 -d supermall --dir <path>
/*
<path>：
mongorestore 最后的一个参数，设置备份数据所在位置，例如：c:\supermall-api\data\dump\supermall
*/
```

2、项目运行：

```
git clone https://github.com/yulb-dev/supermall-interface.git

cd supermall-interface

npm install

node index.js
```

3、注意检查 "/index.js" 里的 corsOptions 的"origin"值，始终与前端项目地址保持一致，因为这涉及到跨域问题
