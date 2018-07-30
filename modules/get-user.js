/**
 * get-user
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const aws = require('aws-sdk');
const config = require('../config');
const db = new aws.DynamoDB.DocumentClient({region: config.DBREGION});
module.exports = (guid, userTableName) => {
  const params = {
    TableName: userTableName,
    Key: {'ID': guid},
  };
  return new Promise ((resolve, reject) => {
    db.get(params, (err, data) => {
      if (err) reject(err);
      if (!data.Item) {
        console.log('no Data Item returned');
      }
      else {
        resolve(data.Item);
      }
    });
  });
};