<template>
   <div>
    <marquee>
      <marquee-item v-for="(item, index) in data" :key="index" @click.native="item.onClick(item)" class="align-middle">{{item.text}}</marquee-item>
    </marquee>
   </div>
</template>

<script>
const Marquee =  require("vux/src/components/marquee/marquee.vue");
const MarqueeItem =  require("vux/src/components/marquee/marquee-item.vue");

export default {
  props: {
    data:Array
  },
  components: {
    Marquee,
    MarqueeItem
  },
}
</script>
<style scoped>
.align-middle {
  text-align: center;
}
</style>