<template>
  <div>
      <popup-picker :title="title" :data="options" v-model="tempModel" :placeholder="placeholder"  :columns="columns" :show-name="cascade"></popup-picker>
  </div>
</template>

<script>
import { PopupPicker} from 'vux'


export default {
  props: {
    title: String,
    model:Array,
    options:Array,
    header:String,
    readonly:Boolean,
    cascade:Boolean,
    columns:Number
  },
  data() {
    return {
      tempModel:this.model,
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
        return this.model?'':this.i18n[this.$i18n["locale"]].vux.common.pleaseselect
      }
  },
  methods:{
  },
  watch:{
    model(val){
      this.tempModel= this.model;
    },
    tempModel(val){
       this.$emit("on-change",val);
    }
  }
};
</script>

<style>
.vux-popup-picker-header-menu-right{
  color: #4D93E4!important;
}
</style>
