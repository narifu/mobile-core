<template>
 <div>
    <tab :line-width="3" active-color='#4D93E4' >
       <tab-item :badge-label="item.badge" :disabled="item.disabled"  :selected="item.selected" v-for="(item, index) in tabItems" @on-item-click="onItemClick" :key="index">{{item.text}}</tab-item>
    </tab>
 </div>   
</template>

<script>
const Tab =  require("vux/src/components/tab/tab.vue");
const TabItem =  require("vux/src/components/tab/tab-item.vue");
export default {
  props: {
    tabItems: Array
  },
  components: {
    Tab,
    TabItem
  },
  methods:{
    onItemClick(tindex){
      _.each(this.tabItems,(item,index)=>{
          if(tindex==index&&item.onClick){
              item.onClick(tindex);
          }
      });
    }
  }
}
</script>


<style>
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #4D93E4;
 }
 .weui-tabbar {
    position: fixed;
 }
</style>