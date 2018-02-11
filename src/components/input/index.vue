<template>
<div v-bind:ref="id">
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
        v-model="model[value]"
        :max="max"
        :min="min"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        @on-focus="_onFocus"
        @on-blur="_onBlur"
        @on-enter="_onEnter"
        @on-change="_onChange"
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
    value:String,
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
      id:_.uniqueId('input-')
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
      return this.onFocus?this._wapperOnFocus:this.moveInput;
    },
    _onBlur(){
      return this.onBlur?this._wapperOnBlur:this.backInput;
    },
    _keyboard(){
      return this.isPhone?'number':'text';
    },
    _onEnter(){
      return this.onEnter?this._wapperOnEnter:this.backInput;
    },
    _onChange(){
      return this.onChange?this.onChange:()=>{};
    }
  },
  methods:{
    backInput(){
       const object = this.$refs[_.keys(this.$refs)[0]];
      setTimeout(function(){
        object.style.position='unset';
        object.style.bottom='unset';
        object.style.width='100%';
        object.style.zIndex='0';
      },200);
    },
    moveInput(){
      const object = this.$refs[_.keys(this.$refs)[0]];
      setTimeout(function(){
        object.style.position='fixed';
        object.style.bottom='0';
        object.style.width='100%';
        object.style.zIndex='600';
      },200);
    },
    _wapperOnFocus(){
      this.moveInput();
      return this.onFocus;
    },
    _wapperOnBlur(){
      this.backInput();
      return this.onBlur;
    },
    _wapperOnEnter(){
      this.backInput();
      return this.onEnter;
    }
  }
}
</script>
<style>
.weui-cells {
    margin-top: 0!important;
}
</style>
