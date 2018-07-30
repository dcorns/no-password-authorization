/**
 * user-exists
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const generateGuid = require('./generate-guid');
module.exports = (email, aid) => {
  if(!aid) {
    //check for user in User table
    const testId = generateGuid(email);

  }
  else{
    //check for user in applications user table
  }
};