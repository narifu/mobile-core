<template>
 <div>
          <x-switch :title="title" :value-map="[0, 1]" v-model="tempModel" :disabled='disabled' ></x-switch>
</div>
</template>


<script>
const XSwitch =  require("vux/src/components/x-switch/index.vue");
export default {
  props: {
    model:Number,
    title:String,
    disabled:Boolean,
    onChange:Function
  },
  data() {
    return {
      tempModel:this.model,
      i18n:this.$i18n["messages"],
    };
  },
  components: {
    XSwitch
  },
  computed:{
     
  },
  watch:{
    model(val){
      this.tempModel= val;
    },
    tempModel(val){
      this.onChange?this.onChange(val):null;
    }
  }
};
</script>

<style>
.weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box {
    border-color: #4D93E4!important;
    background-color: #4D93E4!important;
}
</style>
