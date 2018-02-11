const plugin =  require("vux/src/plugins/confirm/index");



export default {
  install(vue,options){
    plugin.default.install(vue,options);
  },
  show (self,options) {
    self.$vux.confirm.show(options)
  },
  hide (self) {
    self.$vux.confirm.hide()
  }
}
