<template>
    <tabbar>
      <slot/>
      <tabbar-item v-for="item in tabItems" :key="item.text" :link="item.link" :show-dot="item.showdot" :selected="item.selected" :badge="item.badge">
        <img slot="icon" :src="item.icon" v-if="item.icon&&type=='image'" >
        <i slot="icon" v-bind:class="item.icon" v-if="item.icon&&type=='icon'"></i>
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
    type:String
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style>
i.weui-tabbar__icon, .weui-tabbar__icon > i {
    font-size: 20px!important;
}
</style>
