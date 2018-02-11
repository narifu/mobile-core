<template>
     <div v-transfer-dom>
      <confirm v-model="model[value]"
      :title="title"
      @on-cancel="_onCancel"
      @on-confirm="_onConfirm"
      @on-show="_onShow"
      @on-hide="_onHide"
      :close-on-confirm="closeOnConfirm"
      :show-input="showInput"
      :theme="theme"
      :input-attrs="{type: inputType}"
      >
        <slot/>
      </confirm>
    </div>
</template>

<script>
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");
const Confirm =  require("vux/src/components/confirm/index.vue");

export default {
  directives: {
    TransferDom
  },
  props:{
    model:Object,
    value:String,
    showInput: Boolean,
    inputType: String,
    closeOnConfirm:{
      type:Boolean,
      default(){
        return true
      }
    },
    title:String,
    text:String,
    onHide:Function,
    onShow:Function,
    onCancel:Function,
    onConfirm:Function,
    theme:String
  },
  components: {
    Confirm
  },
  computed:{
    _onShow(){
      return this.onShow?this.onShow:()=>{};
    },
    _onHide(){
      return this.onHide?this.onHide:()=>{};
    },
    _onCancel(){
      return this.onCancel?this.onCancel:()=>{};
    },
    _onConfirm(){
      return this.onConfirm?this.onConfirm:()=>{};
    },
  },
}
</script>

<style>
.weui-dialog__btn_primary {
    color: #4D93E4!important;
}
</style>

