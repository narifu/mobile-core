<template>
 <div>
  <box :gap="padding"><slot/></box>
</div>
</template>

<script>
const Box =  require("vux/src/components/box/index.vue");

export default {
  props: {
    padding: {
      type:String,
      default(){
        return '10px 20px'
      }
    }
  },
  components: {
    Box
  }
}
</script>
