<template>
        <toast v-model="model[value]" :time="time" :type="type" :text="text" @on-show="_onShow" @on-hide="_onHide" :position="position" :is-show-mask="isShowMask"></toast>
</template>

<script>
const Toast =  require("vux/src/components/toast/index.vue");

export default {
  props: {
    model:Object,
    value:String,
    isShowMask:Boolean,
    text:String,
    type:String,
    time:Number,
    onShow:Function,
    onHide:Function,
    position:String
  },
  components: {
    Toast
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

