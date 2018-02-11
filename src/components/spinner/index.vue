<template>
 <div>
        <spinner :type="type" :size="size"></spinner>
</div>
</template>

<script>
const Spinner =  require("vux/src/components/spinner/index.vue");

export default {
  props: {
    type: String,
    size: String
  },
  components: {
    Spinner
  }
}
</script>
