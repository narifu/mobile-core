<template>
    <div>
         <group>
            <cell  
              :title="title" 
              :value="value" 
              @click.native="_onClick" 
              :is-loading="isLoading"
              :is-link="isLink"
              :disabled="disabled"
              :primary="primary"
              :border-intent="false"
              :arrow-direction="arrowFlag ? 'up' : 'down'"
              >
                <span slot="title" v-if="!title"><slot/></span>
              </cell>
         </group>
    </div>
</template>

<script>
const Cell =  require("vux/src/components/cell/index.vue");
const Group =  require("vux/src/components/group/index.vue");

export default {
  props:{
    title:String,
    value:String,
    primary:String,
    onClick:Function,
    isLoading:Boolean,
    isLink:Boolean,
    disabled:Boolean,
    arrowFlag:Boolean
  },
  components: {
    Cell,
    Group
  },
  methods:{
      _onClick(event){
        this.onClick?this.disabled?null:this.onClick(event):null;
      }
  }
}
</script>
<style>

</style>


