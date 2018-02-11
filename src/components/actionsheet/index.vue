<template>
<div>
    <actionsheet :close-on-clicking-menu="autoClose" v-model="model[value]" :menus="_menus" @on-click-menu="click" @on-click-mask="clickMask" :theme="theme" :show-cancel="showCancel" :close-on-clicking-mask="isClickMask">
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
    model:Object,
    value:String,
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

