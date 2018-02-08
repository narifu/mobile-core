<template>
      <div>
        <flow v-if='type=="primary"' :orientation="vertical?'vertical':''"  v-bind:style="styles">
            <template v-for="(item, index) in data">
                 <flow-state v-bind:key="`s${index}`" :state="index+1" :title="item.title" :is-done="item.isDone" ></flow-state>
                 <flow-line v-bind:key="`${index}`" :is-done="!item.process && item.isDone" :line-span='item.lineSpan' :tip="item.tip"   :tip-direction="vertical?'right':'top'" :process-span="item.process" ></flow-line>
            </template>
        </flow>
      </div>
</template>

<script>
//const Step =  require("vux/src/components/step/step.vue");
//const StepItem =  require("vux/src/components/step/step-item.vue");
const Flow =  require("vux/src/components/flow/flow.vue");
const FlowState =  require("vux/src/components/flow/flow-state.vue");
const FlowLine =  require("vux/src/components/flow/flow-line.vue");

export default {
  props: {
    step: Number,
    data:Array,
    type:{
        type:String,
        default(){
          return 'primary'
        }
    },
    vertical:Boolean,
    styles:String
  },
  components: {
    Flow,
    FlowState,
    FlowLine
  },
  data(){
    return {
      tempModel:this.step,
    }
  },
  watch:{
    step(val){
      this.tempModel= val;
    },
    tempModel(val){
      this.onChange?this.onChange(val):null;
    }
  },
}
</script>
<style>
.vux-step {
    background-color: white!important;
}
.vux-step-item-head-process .vux-step-item-head-inner {
    border: 1px solid #4D93E4!important;
    background: #4D93E4 none repeat scroll 0 0!important;
}
.vux-step-item-tail-finish {
    background: #4D93E4 none repeat scroll 0 0!important;
}
.weui-icon-success-no-circle {
    color: #4D93E4!important;
}
.vux-step-item-head-finish .vux-step-item-head-inner {
    border: 1px solid #4D93E4!important;
    color: #4D93E4!important;
}
.weui-wepay-flow__li_done .weui-wepay-flow__state {
    background-color: #4D93E4!important;
}
.weui-wepay-flow__process {
    background-color: #4D93E4!important;
}
[class^="weui-wepay-flow__info-"] {
    background-color: #4D93E4!important;
}
.weui-wepay-flow__line_ing .weui-wepay-flow__info-right {
    margin-left: 10px;
}
.weui-wepay-flow__info-top:after {
    border-color: #4D93E4 transparent transparent transparent!important;
}
.weui-wepay-flow__info-right:after {
    border-color: transparent #4D93E4 transparent transparent!important;
}
</style>
