const AlertModule =  require("vux/src/plugins/alert/module").default;

export default {
  show (options) {
     AlertModule.show(options);
  },
  hide () {
     AlertModule.hide();
  }
}
