import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  values: [],
  options: {},
  sparkline: null,
  setupSparkline: function () {

    var tempValues = this.get('values');

    if(!(tempValues instanceof Array)) {
      tempValues = tempValues && tempValues.split(',');
    }

    //console.log(tempOptions);
    //console.log(tempValues);

    this.set('sparkline', this.$().sparkline(tempValues, this.get('options')));
  }.on('didInsertElement')
});
