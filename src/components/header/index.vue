<template>
<div>
    <x-header :left-options="leftOptions" :right-options="rightOptions" :title="title" style="styleClass" @on-click-more="clickMore">
      <span slot="right"><slot/></span>
    </x-header>
</div>    
</template>

<script>
const XHeader =  require("vux/src/components/x-header/index.vue");

export default {
  props: {
    styleClass: String,
    title: String,
    showBack: Boolean,
    backText: String,
    showMore: Boolean,
    onClickMore: Function
  },
  components: {
    XHeader
  },
  computed: {
    leftOptions() {
      return {
        showBack: this.showBack==true?true:false,
        backText: this.backText,
        preventGoBack: false
      }
    },
    rightOptions() {
      return {
        showMore: this.showMore==true?true:false
      }
    },
    clickMore(){
      if(this.onClickMore){
        return this.onClickMore;
      }else{
        return ()=>{};
      }
    }
  }
}
</script>

<style scoped lang="less">
.vux-header{
	width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
}
</style>
