<template>
 <div>
  <divider> <slot/></divider>
</div>
</template>

<script>
const Divider =  require("vux/src/components/divider/index.vue");

export default {
  props: {
    text: String
  },
  components: {
    Divider
  }
}
</script>
