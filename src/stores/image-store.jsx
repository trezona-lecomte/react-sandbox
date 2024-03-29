var React = require('react');
var Api = require('../utils/api');
var Actions = require('../actions');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages: function(topicId) {
    Api.get('topics/' + topicId)
      .then(function(json) {
        this.images = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.images);
  }
});