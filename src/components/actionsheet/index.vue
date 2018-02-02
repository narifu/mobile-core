<template>
<div>
    <actionsheet :close-on-clicking-menu="autoClose" v-model="menuShow" :menus="_menus" @on-click-menu="click" @on-click-mask="clickMask" :theme="theme" :show-cancel="showCancel" :close-on-clicking-mask="isClickMask">
              <div slot="header"  v-if="isHeaderHtml"><slot/></div>
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
    autoClose: {
      type: Boolean,
      default () {
        return true
      }
    },
    menuList: Object,
    menuArrary: Array,
    isHeaderHtml:Boolean,
    theme:String,
    onClick: Function,
    onClickMask: Function,
    showCancel:Boolean,
    isClickMask:{
      type: Boolean,
      default () {
        return true
      }
    }
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
        this.onClick?this.onClick(key):null;
    },
    clickMask(){
        this.onClickMask?this.onClickMask():null;
    }
  },
  computed:{
    _menus(){
      return this.menuList?this.menuList:this.menuArrary?this.menuArrary:null;
    }
  }
}
</script>

<style>
 
</style>