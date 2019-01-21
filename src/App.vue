<!--一共有3个主要部分-->
<!--1模版:html结构-->
<!--注意:只能有一个根标签(如下面的<div></div>)-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!--2行为:处理逻辑-->
<!--组件之间要产生关联，需要先注册(如import HelloWord from 'XXXXX'),然后再调用-->
<script>
export default {
  name: 'App'
}

/// /局部注册组件（test）
// import tables from './components/tables/tables.vue'
// export default{
//  name: 'app',
//  data(){
//    return{
//        title:"这是局部组件测试代码"
//    }
//  },
//  components:{
//      "tables":tables
//  }
// }
</script>

<!--3样式:解决样式-->
<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
