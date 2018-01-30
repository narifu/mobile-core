<template>
      <div>
        <div v-for="(item,index) in list" :key="index" :class="item.class">
          <div @click='_action(item.action,item.param)' data-param="111">
            <span style="font-size:20px;"></span>
            <x-img :src="item.src"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
          </div>
        </div>
      </div>
</template>

<script>
const XImg =  require("vux/src/components/x-img/index.vue");

export default {
  props: {
    list: Array
  },
  components: {
    XImg
  },
  methods:{
     success (src, ele) {
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    },
    _action(action,param){
      action?action(param):null;
    }
  }
}
</script>

<style scoped lang="less">
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>