<template>
<div>
    <group>
        <x-textarea 
        :title="title" 
        :placeholder="placeholder" 
        v-model="model[value]"
        :max="max"
        :show-counter="showCounter"
        :rows="rows"
        :cols="cols"
        :height="height"
        :autosize="autoSize"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        @on-focus="_onFocus"
        @on-blur="_onBlur"
        @on-enter="_onEnter"
        @on-change="_onChange"
        >
        </x-textarea>
    </group>
</div> 
</template>

<script>
const XTextarea =  require("vux/src/components/x-textarea/index.vue");
const Group =  require("vux/src/components/group/index.vue");

export default {
  props: {
    title:String,
    placeholder:String,
    showCounter:{
      type:Boolean,
      default(){
        return true;
      }
    },
    onBlur:Function,
    onChange:Function,
    onFocus:Function,
    rows:Number,
    cols:Number,
    height:Number,
    autoSize:Boolean,
    required:Boolean,
    disabled:Boolean,
    readonly:Boolean,
    model:Object,
    value:String,
    max:Number,
  },
  components: {
    XTextarea,
    Group
  },
  computed: {
    _validator() {
      return this.validator?this.validator:this.isPhone?'china-mobile':this.isEmail?'email':null
    },
    _type(){
      return this.isPassword?'password':this.isPhone?'tel':this.isNumber?'number':null;
    },
    _name(){
      return this.isEmail?'email':null;
    },
    _onFocus(){
      return this.onFocus?this.onFocus:()=>{};
    },
    _onBlur(){
      return this.onBlur?this.onBlur:()=>{};
    },
    _keyboard(){
      return this.isPhone?'number':'text';
    },
    _onEnter(){
      return this.onEnter?this.onEnter:()=>{};
    },
    _onChange(){
      return this.onChange?this.onChange:()=>{};
    }
  },
}
</script>
<style>
.weui-cells {
    margin-top: 0!important;
}
</style>
