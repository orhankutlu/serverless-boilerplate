'use strict';
const responser = require('./responser');
const config = require('./config');

module.exports.action = async (event) => {
  return responser.success();
};




