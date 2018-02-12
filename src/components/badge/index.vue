<template>
   <div>
      <badge :text="text"></badge>
   </div>
</template>

<script>
const Badge =  require("vux/src/components/badge/index.vue");

export default {
  props: {
    text:String
  },
  components: {
    Badge,
  },
}
</script>
