<template>
  <flexbox v-if="_type" :orient="_vertical"><slot/></flexbox>
  <flexbox-item v-else-if="!_type"  v-bind:style="_style" :span="span" :order="order"><slot/></flexbox-item>
</template>

<script>
const Flexbox =  require("vux/src/components/flexbox/flexbox.vue");
const FlexboxItem =  require("vux/src/components/flexbox/flexbox-item.vue");

export default {
  props: {
    type: String,
    padding:String,
    top: String,
    vertical:Boolean,
    span:Number,
    order:Number
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  computed:{
    _type(){
      if(this.type=='row'){
        return true;
      }else{
        return false;
      }
    },
    _style(){
      if(this.padding){
            if(this.top){
                return {marginLeft:this.padding,marginTop:this.top}
            }else{
                return {marginLeft:this.padding,marginTop:'0px'}
            }
      }else{
            if(this.top){
                return {marginLeft:'0px',marginTop:this.top}
            }else{
                return {marginLeft:'8px',marginTop:'0px'}
            }
      }
    },
    _vertical(){
      return this.vertical?'vertical':'';
    },
   
  }
}
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
</style>