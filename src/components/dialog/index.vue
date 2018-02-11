<template>
     <div v-transfer-dom>
      <x-dialog v-model="model[value]" class="dialog-demo" :hide-on-blur="!disableMask" :dialog-style="dialogStyle">
        <slot/>
      </x-dialog>
    </div>
</template>

<script>
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");
const XDialog =  require("vux/src/components/x-dialog/index.vue");

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
    dialogStyle:Object
  },
  components: {
    XDialog
  },
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/close';
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
}
</style>

