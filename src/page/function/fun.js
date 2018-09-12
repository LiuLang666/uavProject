exports.install = function (Vue) {
  Vue.prototype.goMain = function (path) {
    this.$router.push({
      path:path
    })
  };
}
