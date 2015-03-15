/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-sparkline',
  included: function (app) {
    app.import(app.bowerDirectory + "/jquery.sparkline.build/dist/jquery.sparkline.js");
  }
};
