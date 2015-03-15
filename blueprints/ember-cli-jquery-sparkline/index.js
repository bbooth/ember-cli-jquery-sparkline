module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('jquery.sparkline.build', '~2.1.3');
  }
};
