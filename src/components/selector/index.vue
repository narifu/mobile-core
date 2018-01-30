<template>
 <div>
    <popup-radio :title="title" :readonly="readonly" :options="_option" v-model="tempModel"  :placeholder="placeholder" >
              <p slot="popup-header" class="vux-1px-b demo3-slot" v-if="header">{{header}}</p>
    </popup-radio>
</div>
</template>


<script>
const PopupRadio =  require("vux/src/components/popup-radio/index.vue");
export default {
  props: {
    title: String,
    model:String,
    options:Array,
    header:String,
    readonly:Boolean
  },
  data() {
    return {
      tempModel:this.getModel(),
      i18n:this.$i18n["messages"],
    };
  },
  components: {
    PopupRadio
  },
  computed:{
      _option(){
        const options = [];
        _.each(this.options,(option)=>{
          options.push(option.value);
        });
        return options;
      },
      placeholder(){
        return this.model?'':this.i18n[this.$i18n["locale"]].vux.common.pleaseselect
      }
  },
  methods:{
      getModel(val){
         const model = _.find(this.options,(option)=>{
            if(_.isEmpty(val)){
              return option.key==this.model;
            }else{
              return option.key==val;
            }
         });
         return model?model.value:null;
      },
      clearValue (value) {
        this.tempModel = null;
      }
  },
  watch:{
    model(val){
      this.tempModel= this.getModel(val);
    },
    tempModel(val){
       const model = _.find(this.options,(option)=>{
            return option.value==val;
       });
       this.$emit("on-change",model.key);
    }
  }
};
</script>

<style>
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
}
.weui-cells_radio .weui-check:checked + .weui-icon-checked:before {
    color: #4D93E4!important;
}
.vux-label {
    display: flex!important;
}
</style>
