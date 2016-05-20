'use strict';

var AMQP = require("amqp-coffee");

var config = require(__base + '/server/config/config');
var logger = require(__base + '/server/init/logger').main;

var connection = null ;

/**
* Function Name: initializeRabbitMQ
* @api private
* @param NONE
* Description: The function initializes the rabbitmq connection
**/
function initializeRabbitMQ(){
  logger.info("[INITIALIZATION] --> rabbit.js --> initializeRabbitMQ --> Initializing rabbitmq");

  connection = new AMQP({
    host: config.rabbit.host,
    port: config.rabbit.port,
    login: config.rabbit.username,
    password: config.rabbit.password
  },function(err){
    if(err){
      logger.error("[INITIALIZATION-Error] --> rabbit.js -->  initializeRabbitMQ --> Could not initilizing rabbitmq. Detail : " + err);
    }else{
      logger.info("[INITIALIZATION]  --> rabbit.js --> initializeRabbitMQ --> Rabbitmq initialized");
    }
  });
}

initializeRabbitMQ();

/**
* Function Name: reconnect
* @api public
* @param NONE
* Description: The function when called re-connects to rabbitmq
**/
module.exports.reconnect = function() {
  logger.info("[INITIALIZATION]  --> rabbit.js --> reconnect --> Re-initializing rabbitmq");
  initializeRabbitMQ();
};

/**
* Function Name: getConnection
* @api public
* @param NONE
* Description: The function when returns the rabbitmq connection and reconnects the connection if not available
**/
module.exports.getConnection = function() {
  if(connection === undefined || connection === null){
    logger.info("[INITIALIZATION] --> rabbit.js --> getConnection --> Re-initializing rabbitmq");
    initializeRabbitMQ();
    return connection;
  }else{
    return connection;
  }
};
