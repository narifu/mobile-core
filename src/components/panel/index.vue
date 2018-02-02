<template>
    <div>
         <panel  :list="data" :type="type" @on-img-error="onImgError"></panel>
    </div>
</template>

<script>
const Panel =  require("vux/src/components/panel/index.vue");

export default {
  props:{
    data:Array,
    type:{
      type:String,
      default(){
        return '2'
      }
    }
  },
  components: {
    Panel
  },
  methods:{
      onImgError(){
        console.error('image load error')
      }
  }
}
</script>
<style>
.weui-media-box_text{
  text-align: left!important;
}
.weui-media-box_appmsg .weui-media-box__bd {
  text-align: left!important;
}
.weui-cell__bd{
    text-align: left!important;
}
</style>


