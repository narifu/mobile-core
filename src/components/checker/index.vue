<template>
      <div>
        <checker v-if="type=='default'"  v-model="model[value]" :max="max" :type="_multiple" default-item-class="item" selected-item-class="item-selected"  @on-change="onChange" >
           <checker-item :disabled="item.disabled" :value="modelKey?item:item.key" v-for="(item, index) in data" :key="index">{{item.value}}</checker-item>
        </checker>
        <check-icon v-if="type=='icon'" :value.sync="model[value]"  :type="plain?'plain':undefined">{{ text }}</check-icon>
        <checklist v-if="type=='list'" @on-change="_onChange" :max="max" :disabled="disabled" :title="title" :label-position="labelPosition" :required="required" :options="data" v-model="model[value]"></checklist>
      </div>
</template>

<script>
const Checker =  require("vux/src/components/checker/checker.vue");
const CheckerItem =  require("vux/src/components/checker/checker-item.vue");
const CheckIcon =  require("vux/src/components/check-icon/index.vue");
const Checklist =  require("vux/src/components/checklist/index.vue");

export default {
  props: {
    model: [String, Number, Array,Boolean, Object],
    value:String,
    data:Array,
    onChange:Function,
    modelKey:Boolean,
    required:Boolean,
    disabled:Boolean,
    plain:Boolean,
    type:{
        type:String,
        default(){
            return 'list'
        }
    },
    labelPosition:{
        type:String,
        default(){
            return 'right'
        }
    },
    text:String,
    title:String,
    max:Number,
    multiple:Boolean
  },
  components: {
    Checker,
    CheckerItem,
    CheckIcon,
    Checklist
  },
  computed:{
      _multiple(){
          return this.multiple?"checkbox":undefined
      },
      _onChange(){
          return this.onChange?this.onChange:()=>{};
      }
  },
}
</script>
<style>
.item {
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 5px;
  padding: 5px 10px;
  margin: 5px;
}
.item-selected {
  background: #ffffff url(../../styles/images/checker.png) no-repeat right bottom;
  border-color: #4D93E4!important;
}
.vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before {
    color: #4D93E4!important;
}
.weui-cells_checkbox .weui-check:checked + .vux-checklist-icon-checked:before {
    color: #4D93E4!important;
}

.weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before {
    color: #4D93E4!important;
}

.weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before {
    color: #4D93E4!important;
}
</style>
