<template>
 <div>
      <datetime
        v-model="model[value]"
        :title="title"
        :format="format"
        :minute-list="minuteList"
        :hour-list="hourList"
        :readonly="readonlyValue"
        :start-date="startDate"
        :end-date="endDate"
        :placeholder="placeholders"
        :year-row="year"
        :month-row="month"
        :day-row="day" 
        :hour-row="hour" 
        :minute-row="minute" 
        :confirm-text="confirm" 
        :cancel-text="cancel"
        :clear-text="clear"
        @on-clear="clearValue"
        :required="required"
        >
      </datetime>
</div>
</template>


<script>
const Datetime =  require("vux/src/components/datetime/index.vue");
export default {
  props: {
    title: String,
    model:Object,
    value:String,
    format:String,
    minuteList:Array,
    hourList:Array,
    readonly:Boolean,
    startDate:String,
    endDate:String,
    placeholder:String,
    required:Boolean
  },
  data() {
    return {
      i18n:this.$i18n["messages"],
    };
  },
  methods:{
    clearValue (value) {
      this.model[this.value] = null;
    }
  },
  components: {
    Datetime
  },
  computed:{
      placeholders(){
         return this.placeholder?this.placeholder:this.i18n[this.$i18n["locale"]].vux.common.pleaseselect;
      },
      readonlyValue(){
        return this.readonly?"readonly":null
      },
      year(){
        return `{value}${this.i18n[this.$i18n["locale"]].vux.datetime.year}`;
      },
      month(){
        return `{value}${this.i18n[this.$i18n["locale"]].vux.datetime.month}`;
      },
      day(){
        return `{value}${this.i18n[this.$i18n["locale"]].vux.datetime.day}`;
      },
      hour(){
        return `{value}${this.i18n[this.$i18n["locale"]].vux.datetime.hour}`;
      },
      minute(){
        return `{value}${this.i18n[this.$i18n["locale"]].vux.datetime.minute}`;
      },
      confirm(){
        return `${this.i18n[this.$i18n["locale"]].vux.datetime.confirm}`;
      },
      cancel(){
        return `${this.i18n[this.$i18n["locale"]].vux.datetime.cancel}`;
      },
      clear(){
        return `${this.i18n[this.$i18n["locale"]].vux.datetime.clear}`;
      }
  },
};
</script>

<style>
.dp-header .dp-item {
    color: #4D93E4!important;
}
.dp-header .dp-item.dp-right {
    color: #4D93E4!important;
}
.dp-header .dp-item.dp-left {
    color: #828282!important;
}
</style>
