/**
 * generate-guid
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const crypto = require('crypto');
const config = require('../config');
module.exports = (email) => {
  return crypto.createHmac('sha256', config.SECRET)
    .update(email)
    .digest('hex');
};