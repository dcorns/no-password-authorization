/**
 * user-exists
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const generateGuid = require('./generate-guid');
const getUser = require('./get-user');
const config = require('../config');
module.exports = (email, aid) => {
  if(!aid) {
    //check for user in User table
    const testId = generateGuid(email, config.SECRET);
    console.log('user-exists: testId= ',testId);
    return new Promise((resolve, reject) => {
      console.log('user-exists: Instantiating promise before get user');
      getUser(testId, 'Users' )
        .then((res) => {
          console.log('user-exists: Check Completed');
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  else{
    //check for user in applications user table
  }
};