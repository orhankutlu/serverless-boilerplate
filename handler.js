'use strict';
const responser = require('./responser');
const config = require('./config');
const eventParser = require('./utils/eventParser');

module.exports.action = async (event) => {
  const body = eventParser(event);
  return responser.success({ body });
};




