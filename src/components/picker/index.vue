<template>
  <div>
      <popup-picker @on-change="_onChange" :title="title" :data="options" v-model="model[value]" :placeholder="placeholder"  :columns="columns" :show-name="cascade"></popup-picker>
  </div>
</template>

<script>
import { PopupPicker} from 'vux'


export default {
  props: {
    title: String,
    model:Object,
    value:String,
    options:Array,
    header:String,
    readonly:Boolean,
    cascade:Boolean,
    columns:Number,
    onChange:Function
  },
  data() {
    return {
      i18n:this.$i18n["messages"],
    };
  },
  methods:{
    clearValue (value) {
      this.tempModel = null;
    }
  },
  components: {
    PopupPicker
  },
  computed:{
      placeholder(){
        return _.isEmpty(this.model[this.value])?this.i18n[this.$i18n["locale"]].vux.common.pleaseselect:null
      },
      _onChange(){
        return this.onChange?this.onChange:()=>{};
      }
  },

};
</script>

<style>
.vux-popup-picker-header-menu-right{
  color: #4D93E4!important;
}
</style>
