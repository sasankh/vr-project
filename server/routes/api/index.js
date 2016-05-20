'use strict';

//module with all the api routes
var apiRoutes = require(__base + '/server/routes/api/routes');

//
var health = require(__base + '/server/controllers/health');

exports = module.exports = function(app) {

  //GET
  app.get(apiRoutes.healthCheck,health.checkServerStatus);

  //POST


  //PUT


  //DEL


};
