const LoadingPlugin =  require("vux/src/plugins/loading/index");



export default {
  install(vue,options){
    LoadingPlugin.default.install(vue,options);
  },
  show (self,options) {
    self.$vux.loading.show(options)
  },
  hide (self) {
    self.$vux.loading.hide()
  }
}
