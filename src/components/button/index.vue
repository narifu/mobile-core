<template>
  <x-button 
    :gradients="gradients" 
    :type="_type" :link="link" 
    :show-loading="loading" 
    :mini="mini" 
    :plain="plain" 
    :style="styleClass" 
    :class="className" 
    :disabled="disabled"
    @click.native="clickButton"
    v-bind:data-param="param"
    ><slot/></x-button>
</template>

<script>
const XButton =  require("vux/src/components/x-button/index.vue");

export default {
  props: {
    gradients: Array,
    value: String,
    type: {
      type:String,
      default(){
        return 'primary'
      }
    },
    link: String,
    styleClass: String,
    className: String,
    loading:Boolean,
    mini:Boolean,
    plain:Boolean,
    disabled:Boolean,
    onClick:Function,
    param:String
  },
  components: {
    XButton
  },
  computed:{
    _type(){
      return this.type=="danger"?'warn':this.type;
    },
  },
  methods:{
    clickButton(event){
        this.onClick?this.onClick(event):null;
    }
  }
}
</script>
<style>
.weui-btn_primary {
    background-color: #4D93E4!important;
}
.weui-btn_loading.weui-btn_primary {
    background-color: #4D93E4!important;
}
.weui-btn_plain-primary {
    color: #4D93E4;
    border: 1px solid #4D93E4!important;
}
.weui-btn_disabled.weui-btn_primary {
    background-color: #4D93E4!important;
}

</style>
