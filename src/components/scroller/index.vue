<template>
  <div>
    <scroller height="-40" lock-x scrollbar-y>
          <slot/>
    </scroller>
  </div>
</template>

<script>
const Scroller =  require("vux/src/components/scroller/index.vue");

export default {
  props: {
    cols: {
      type: Number,
      default () {
        return 4
      }
    },
    gridItems: Array
  },
  components: {
    Scroller
  },
}
</script>
