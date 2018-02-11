<template>
     <div v-transfer-dom>
      <popup v-model="model[value]" :show-mask="showMask" @on-hide="_onHide" @on-show="_onShow" :height="height" :width="width" :hide-on-blur="disableMask" :position="position">
        <slot/>
      </popup>
    </div>
</template>

<script>
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");
const Popup =  require("vux/src/components/popup/index.vue");

export default {
  directives: {
    TransferDom
  },
  props:{
    model:Object,
    value:String,
    showMask: {
      type:Boolean,
      default(){
        return true;
      }
    },
    disableMask: Boolean,
    mask:{
      type:Boolean,
      default(){
        return true;
      }
    },
    onHide:Function,
    onShow:Function,
    height:String,
    position:String,
    width:String
  },
  components: {
    Popup
  },
  computed:{
    _onHide(){
      return this.onHide?this.onHide:()=>{};
    },
    _onShow(){
      return this.onShow?this.onShow:()=>{};
    }
  }
}
</script>
<style>

</style>

