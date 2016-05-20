'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports = module.exports = function(app, mongoose) {
  var sampleCollectionSchema = new mongoose.Schema({
    name : { type: String, require: false },
    created_at: { type: Date, default: Date.now }
  });

  sampleCollectionSchema.index({ 'name': 1,'created_at': 1 });
  sampleCollectionSchema.set('autoIndex', (app.get('env') === 'development'));
  mongoose.model('SampleCollection', sampleCollectionSchema);
};
