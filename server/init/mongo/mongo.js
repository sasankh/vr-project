'use strict';

var config = require(__base + '/server/config/config');
var logger = require(__base + '/server/init/logger').main;

exports = module.exports = function(app, mongoose) {
  mongoose.connect(config.mongo.uri, {server:{autoReconnect:true}});

  mongoose.connection.on('error', function(err) {
    logger.error('[INITIALIZATION]--> mongo.js --> Mongoose Connection Problem. Detail : ' + err);
    mongoose.disconnect();
  });

  mongoose.connection.on('open', function(err) {
    logger.info('[INITIALIZATION] --> mongo.js --> MongoDB Connection Opened');
  });

  mongoose.connection.on('close', function(err) {
    logger.info('[INITIALIZATION] --> mongo.js --> MongoDB Connection Closed');
  });

  mongoose.connection.on('disconnected', function () {
    logger.error("[INITIALIZATION] --> mongo.js --> Disconnected from MongoDB");
    //makes a reconnect attemp every 5 seconds
    setTimeout(function(){
      mongoose.connect(config.mongo.uri, {server:{ autoReconnect:false }});
    }, 5000);
  });

  mongoose.connection.on('connected', function(err) {
    logger.info("[INITIALIZATION] --> mongo.js --> Successfully connected to MongoDB");
  });

  //import the schemas for the collection
  require(__base + '/server/init/mongo/schema/sampleCollectionSchema')(app, mongoose);

};
