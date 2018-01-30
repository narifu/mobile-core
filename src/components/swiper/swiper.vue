<template>
 <div>
        <swiper :direction="direction" :show-dots="showDots" :list="data" v-model="tempModel" @on-index-change="onIndexChange" :aspect-ratio="300/800" :auto="auto" :height="height">
            <slot/>
        </swiper>
</div>
</template>


<script>
const Swiper =  require("vux/src/components/swiper/swiper.vue");
const SwiperItem =  require("vux/src/components/swiper/swiper-item.vue");
export default {
  props: {
    model:Number,
    data:Array,
    auto:Boolean,
    showDots:Boolean,
    height:String,
    direction:String,
  },
  data() {
    return {
      tempModel:this.model,
      i18n:this.$i18n["messages"],
    };
  },
  components: {
    Swiper,
    SwiperItem
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
      onIndexChange (value) {
      }
  },
  watch:{
    model(val){
      this.tempModel= val;
    },
    tempModel(val){
       this.$emit("on-change",val);
    }
  }
};
</script>

<style>
.vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
    background-color: #4D93E4!important;
}
.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    display: flex;
}
</style>
