<template>
<div>
    <group>
        <x-input 
        :title="title" 
        :placeholder="placeholder" 
        :novalidate="validate"  
        :icon-type='iconType' 
        :show-clear="showClear"  
        placeholder-align="right"
        text-align="right"
        :debounce="500"
        :is-type="_validator"
        :mask="mask"
        :type="_type"
        :name="_name"
        :keyboard="_keyboard"
        v-model="tempModel"
        :max="max"
        :min="min"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        @on-focus="_onFocus"
        @on-blur="_onBlur"
        @on-enter="_onEnter"
        >
         <div slot="label" v-if="!title"><slot/></div>
         <div slot="right" v-if="right"><slot/></div>
        </x-input>
    </group>
</div> 
</template>

<script>
const XInput =  require("vux/src/components/x-input/index.vue");
const Group =  require("vux/src/components/group/index.vue");

export default {
  props: {
    title:String,
    placeholder:String,
    showClear:{
      type:Boolean,
      default(){
        return true;
      }
    },
    onBlur:Function,
    onChange:Function,
    onFocus:Function,
    iconType:String,
    validate:{
      type:Boolean,
      default(){
        return true;
      }
    },
    validator:Function,
    isPhone:Boolean,
    isEmail:Boolean,
    isNumber:Boolean,
    right:Boolean,
    required:Boolean,
    disabled:Boolean,
    readonly:Boolean,
    isPassword:Boolean,
    mask:String,
    model:Object,
    equalWith:Object,
    max:Number,
    min:Number,
  },
  components: {
    XInput,
    Group
  },
  data(){
    return {
      tempModel:this.model,
    }
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
    }
  },
  watch: {
    model(val){
      this.tempModel= val;
    },
    tempModel(val){
      this.onChange?this.onChange(val):null;
    }
  }
}
</script>
<style>
.weui-cells {
    margin-top: 0!important;
}
</style>
