<template>
        <toast v-model="tempModel" :time="time" :type="type" :text="text" @on-show="_onShow" @on-hide="_onHide" :position="position" :is-show-mask="isShowMask"></toast>
</template>

<script>
const Toast =  require("vux/src/components/toast/index.vue");

export default {
  props: {
    model:Boolean,
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
  data(){
    return {
      tempModel:this.model,
    }
  },
  computed:{
    _onShow(){
      return this.onShow?this.onShow:()=>{};
    },
    _onHide(){
      return this.onHide?this.onHide:()=>{};
    }
  },
  watch: {
    model(val){
      this.tempModel= val;
    },
    tempModel(val){
      this.onChange?this.onChange(val):null;
    }
  }
}
</script>

