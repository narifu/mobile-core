<template>
    <div :class="className">
      <view-box ref="viewBox">
        <slot></slot>
      </view-box>
    </div>
</template>

<script>
const ViewBox =  require("vux/src/components/view-box/index.vue");

export default {
  props:{
    className:{
      type:String,
      default(){
        return 'page'
      }
    }
  },
  components: {
    ViewBox
  },
}
</script>
<style>
.page{
	 position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  padding-top: 46px;
}
body{
  background-color: #eee
}
.fa{
 color: #4D93E4;
}
</style>

