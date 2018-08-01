/**
 * remove-user
 * Created by dcorns on 8/1/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const aws = require('aws-sdk');
const config = require('../config');
const getUser = require('./get-user');
aws.config.update({
  endpoint: config.awsLocalEndpoint
});
const db = new aws.DynamoDB.DocumentClient({region: config.DBREGION});
module.exports = (guid, aid) => {
  if(!aid) {
    return new Promise((resolve, reject) => {
        const params = {
          TableName: 'Users',
          Key: {'ID': guid},
        };
        db.delete(params,(err) => {
          if(err) {
            reject(err);
          }
          else {getUser(guid, 'Users')
            .then(user => {
              if(user.ID){
                resolve(false);
              }
              else {
                resolve(true);
              }
            })
            .catch(err => reject(err));
          }
        });
      });
  }
  else{
    console.log('remove user by application not yet implemented');
  }
};