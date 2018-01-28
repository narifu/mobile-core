<template>
   <div v-transfer-dom>
      <loading v-model="show" :text="text"></loading>
    </div>
</template>

<script>
const Loading =  require("vux/src/components/loading/index.vue");
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");

export default {
  directives: {
    TransferDom
  },
  props: {
    show: {
      type: Boolean,
      default () {
        return false
      }
    },
    text: {
      type: String,
      default () {
        return "Loading"
      }
    }
  },
  components: {
    Loading
  },
}
</script>
