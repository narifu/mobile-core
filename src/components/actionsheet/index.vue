<template>
<div>
    <actionsheet v-model="menuShow" :menus="menuList" @on-click-menu="click" @on-click-mask="clickMask">
              <p slot="header" v-html="headerHtml"></p>
    </actionsheet>
</div>    
</template>

<script>
const Actionsheet =  require("vux/src/components/actionsheet/index.vue");
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");

export default {
  components: {
    Actionsheet,
  },
  directives: {
    TransferDom
  },
  props: {
    showMenu: {
      type: Boolean,
      default () {
        return false
      }
    },
    menuList: {
      type: Object,
      default () {
        return {
          menu1: 'menu1',
          menu2: 'menu2'
        }
      }
    },
    headerHtml:String,
    onClick: Function
  },
  data () {
    return {
      menuShow:false,
    }
  },
  watch:{
    showMenu(){
      this.menuShow = true;
    }
  },
  methods: {
    click (key) {
      if(this.onClick){
        this.onClick(key);
      }
    },
    clickMask(){
      // console.log(this.menuShow);
      //  if(this.menuShow){
      //     this.menuShow = false;
      //  }
    }
  }
}
</script>

<style>
 
</style>