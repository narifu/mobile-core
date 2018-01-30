<template>
 <div>
       <tab-item :badge-label="badge" :disabled="disabled"  :selected="selected" @on-item-click="onItemClick">
         <slot/>
       </tab-item>
 </div>   
</template>

<script>
const TabItem =  require("vux/src/components/tab/tab-item.vue");
export default {
  props: {
    badge: String,
    disabled:Boolean,
    selected:Boolean,
    onClick:Function
  },
  components: {
    TabItem
  },
  methods:{
    onItemClick(tindex){
      this.onClick?this.onClick(tindex):null;
    }
  }
}
</script>
