<template>
  <div>
    <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#35495e', width: '200px'}">
      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
          </cell>
          <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
          </cell>
          <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
          </cell>
        </group>
      </div>

      <!-- main content -->
         <slot/>
    
    </drawer>
  </div>
</template>

<script>
const Drawer =  require("vux/src/components/drawer/index.vue");
const ViewBox =  require("vux/src/components/view-box/index.vue");
const Group =  require("vux/src/components/group/index.vue");
const Cell =  require("vux/src/components/cell/index.vue");
const TransferDom =  require("vux/src/directives/transfer-dom/index.js");

export default {
  directives: {
    TransferDom
  },
  components: {
    Drawer,
    ViewBox,
    Group,
    Cell
  },
  data () {
    return {
      showMenu: false,
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
</style>