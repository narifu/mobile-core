<template>
    <div v-transfer-dom>
      <alert v-model="model[value]" :title="title" @on-show="_onShow" @on-hide="_onHide"><slot/></alert>
    </div>
</template>

<script>
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");
const Alert =  require("vux/src/components/alert/index.vue");

export default {
  directives: {
    TransferDom
  },
  props:{
    model:Object,
    value:String,
    disableMask:{
      type:Boolean,
      default(){
        return true
      }
    },
    title:String,
    text:String,
    onHide:Function,
    onShow:Function
  },
  components: {
    Alert
  },
  computed:{
    _onShow(){
      return this.onShow?this.onShow:()=>{};
    },
    _onHide(){
      return this.onHide?this.onHide:()=>{};
    }
  },
}
</script>

<style>
.weui-dialog__btn_primary {
    color: #4D93E4!important;
}
</style>

