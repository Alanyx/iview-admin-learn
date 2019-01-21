<!--如果你的一个页面上有多个组件，而不同的组件对于权限的要求又有所不同，
那么，你可以使用如下方法给一个组件设置根据权限值配置它的可访问性：-->
<template>
  <div>
    <component1 v-if="viewAccessAll"></component1>
    <component2 v-if="viewAccessSuper"></component2>
  </div>
</template>

<script>
import {hasOneOf} from '@/libs/tools'

export default {
  name: 'page',
  computed: {
    access () {
      return this.$store.state.user.page
    },
    viewAccessAll () {
      return hasOneOf(['super_admin', 'admin'], this.page)
    },
    viewAccessSuper () {
      return hasOneOf(['super_admin'], this.page)
    }
  }
}
</script>

<!--上面的例子中，admin和super_admin权限的用户都可看到component1组件，
而component2只有super_admin可以看到。-->
