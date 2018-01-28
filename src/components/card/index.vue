<template>
<div>
    <card :header="header" :footer="footer">
      <r-image slot="header" :list="imageList" v-if="imageList"/>
      <div slot="content" class="card-content">
            <slot/>
            <div v-if="list">
                <div class="card-demo-flex card-demo-content01">
                         <div class="vux-1px-r" v-for="item in list" :key="item.text" @click="onItemClick(item.link)">
                                <span>{{item.number}}</span>
                                <br/>
                                {{item.text}}
                        </div>
                </div> 
            </div>
      </div>
    </card>
</div>    
</template>

<script>
const Card =  require("vux/src/components/card/index.vue");

import RImage from "../image/index.vue"
export default {
  props: {
    title: String,
    list:Array,
    footerText: String,
    footerLink:String,
    imgSrc:String
  },
  components: {
    Card,
    RImage
  },
  computed: {
    header() {
      return {title:this.title}
    },
    footer() {
      return {title:this.footerText,link:this.footerLink}
    },
    imageList(){
      return this.imgSrc?[{'class':'','src':this.imgSrc}]:false
    }
  },
  methods:{
      onItemClick(link){
          window.location.hash=link;
      }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex a {
  color: #333;
}
.card-demo-flex span {
  color: #f74c31;
}
.card-content{
  text-align: center
}
.weui-panel:first-child {
    margin-top: 10px!important;
}

</style>