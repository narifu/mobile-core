<template>
    <div>
         <group>
            <cell  
              :title="title" 
              :value="value" 
              @click.native="_onClick" 
              :is-loading="isLoading"
              :is-link="_isLink"
              :disabled="disabled"
              :primary="primary"
              :border-intent="false"
              :arrow-direction="arrowFlag ? 'down' : null"
              >
                <span slot="title" v-if="!title" class="row-value"><slot/></span>
                <span v-if="title&&!value" class="row-value"><slot/></span>
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
    link:String,
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
        this.onClick?this.disabled?null:this.onClick(event):this.link?this.disabled?null:window.location.hash=this.link:null;
      }
  },
  computed:{
    _isLink(){
      return this.link?true:this.isLink;
    }
  }
}
</script>
<style>
.row-value{
    display: flex;
    justify-content: flex-end;
}
</style>


