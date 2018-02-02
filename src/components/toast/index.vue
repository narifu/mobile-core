<template>
        <toast v-model="tempModel" :text="text"></toast>
</template>

<script>
const Toast =  require("vux/src/components/toast/index.vue");

export default {
  props: {
    model:Boolean,
    text:String,
    onChange:Function
  },
  components: {
    Toast
  },
  data(){
    return {
      tempModel:this.model,
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

