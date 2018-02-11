<template>
 <div>
          <x-switch :title="title" :value-map="[false,true]" v-model="model[value]" :disabled='disabled' @click.native="_onClick"></x-switch>
</div>
</template>


<script>
const XSwitch =  require("vux/src/components/x-switch/index.vue");
export default {
  props: {
    model:Object,
    value:String,
    title:String,
    disabled:Boolean,
    onChange:Function,
    onClick:Function
  },
  components: {
    XSwitch
  },
  methods:{
    _onClick(){
       this.onClick?this.onClick():()=>{};
    }
  },
};
</script>

<style>
.weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box {
    border-color: #4D93E4!important;
    background-color: #4D93E4!important;
}
</style>
