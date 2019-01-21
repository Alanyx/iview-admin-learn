iview-admin2.0文档学习
========

参考:https://lison16.github.io/iview-admin-doc/#/%E7%AE%80%E4%BB%8B

## 目录结构

~~~
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    ├── api  AJAX请求
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  业务组件
    ├── config  项目运行配置
    ├── directive  自定义指令
    ├── libs  封装工具函数
    ├── locale  多语言文件
    ├── mock  mock模拟数据
    ├── router  路由配置
    ├── store  Vuex配置
    ├── view  页面文件
    └── tests  测试相关
~~~

## 快速开始
从github获取最新的iView-admin代码，使用如下命令获取2.0分支最新代码：

~~~
git clone https://github.com/iview/iview-admin.git -b 2.0
~~~

然后进入项目根目录

~~~
cd iview-admin
~~~
安装依赖并运行项目

~~~
npm install
npm run dev
~~~
然后只需要等待编译结束后其自动打开页面

## 全局配置
见config目录

## 路由配置
见router目录

## 多语言
见locale目录
如果你需要在iview-admin中使用多语言，需要将./src/config/index.js里的useI18n设为true，下面来介绍如何使用多语言。

## 权限控制
权限控制分两种，即整个页面具有权限控制，和页面中单个组件需要权限。

1.整个页面访问限制  
见routers.js中路由配置的meta中配置access字段

2.单个组件浏览控制   
见./learn/access示例代码

## 全局指令

## 组件
iView-admin内部封装了很多业务组件，方便使用者使用，这些组件都在./src/components目录下，使用时可使用便捷方式引入，如使用count-to组件时：

~~~
<template>
  <count-to :end="12"/>
</template>

<script>
import CountTo from '_c/count-to' // 这里的_c是在./vue.config.js中定义的，等效./src/components
export default {
  components: {
    CountTo
  }
}
</script>
~~~

### Icons
目录: ./src/assets/icons

使用方式:<icons type="woman" />

### 。。。其他

## 接口请求
在iview-admin2.0对axios进行了封装，如果你需要调用接口，步骤如下：

目录: ./src/api

## Mock数据模拟
在iview-admin2.0中使用Mock.js来实现AJAX请求拦截并返回模拟数据，方便前端开发人员的快速开发，无需等待后端接口实现。

见目录:./src/mock




