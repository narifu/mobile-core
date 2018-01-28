<template>
    <tabbar>
      <slot/>
      <tabbar-item v-for="item in tabItems" :key="item.text" :link="item.link" :show-dot="item.showdot" :selected="item.selected" :badge="item.badge">
        <img slot="icon" :src="item.icon">
        <span slot="label">{{item.text}}</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
const Tabbar =  require("vux/src/components/tabbar/tabbar.vue");
const TabbarItem =  require("vux/src/components/tabbar/tabbar-item.vue");

export default {
  props: {
    tabItems: Array,
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style>

</style>
