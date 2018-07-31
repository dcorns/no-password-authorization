/**
 * user-exists
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const generateGuid = require('./generate-guid');
const getUser = require('./get-user');
module.exports = (email, aid) => {
  if(!aid) {
    //check for user in User table
    const testId = generateGuid(email);
    getUser(testId, 'User' )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  else{
    //check for user in applications user table
  }
};