/**
 * get-user
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const aws = require('aws-sdk');
const config = require('../config');
aws.config.update({
  endpoint: config.awsLocalEndpoint
});
const db = new aws.DynamoDB.DocumentClient({region: config.DBREGION});
module.exports = (guid, userTableName) => {
  const params = {
    TableName: userTableName,
    Key: {'ID': guid},
  };
  return new Promise ((resolve, reject) => {
    console.log('get-user: running db.get');
    try{
      db.get(params, (err, data) => {
        console.log(data);
        console.log(err);
        if (err) {
          reject(err);
        }
        if (!data.Item) {
          resolve(data);
        }
        else {
          resolve(data.Item);
        }
    });
    }
    catch (e){
      console.log('try failed');
      console.log(e);
    }
  });
};