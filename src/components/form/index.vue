<template>
 <div>
      <group :title="title">
          <slot/>
      </group>    
</div>
</template>

<script>
const GroupTitle =  require("vux/src/components/group-title/index.vue");
const Group =  require("vux/src/components/group/index.vue");

export default {
  props: {
    title: String
  },
  components: {
    GroupTitle,
    Group
  }
}
</script>
