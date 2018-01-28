<template>
 <div>
    <group>
      <cell :title="title" :value="value" v-if="title"></cell>
      <cell-form-preview :list="data"></cell-form-preview>
    </group>
  </div>
</template>

<script>
const CellFormPreview =  require("vux/src/components/cell-form-preview/index.vue");
const Group =  require("vux/src/components/group/index.vue");
const Cell =  require("vux/src/components/cell/index.vue");
export default {
  props: {
    title: String,
    value: String,
    data:Array
  },
  components: {
    CellFormPreview,
    Group,
    Cell
  }
}
</script>
