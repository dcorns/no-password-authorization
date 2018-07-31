/**
 * add-user
 * Created by dcorns on 7/31/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const aws = require('aws-sdk');
const config = require('../config');
const generateGuid = require('./generate-guid');
aws.config.update({
  endpoint: config.awsLocalEndpoint
});
const db = new aws.DynamoDB.DocumentClient({region: config.DBREGION});
module.exports = (email, aid) => {
  const guid = generateGuid(email, config.SECRET);
  if (!aid) {
    return new Promise((resolve, reject) => {
      const putParams = {
        Item:{
          ID: guid,
          EMAIL: email,
          INFO: {},
          ROLES: {},
        },
        TableName: 'Users'
      };
      db.put(putParams, (err, data) => {
        if(err) {
          reject(err);
        }
      });
      resolve(putParams.Item);
    });
  }
  else {
    //add user to specified application
  }
};