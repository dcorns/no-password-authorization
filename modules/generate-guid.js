/**
 * generate-guid
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const crypto = require('crypto');
module.exports = (email, secret) => {
  return crypto.createHmac('sha256', secret)
    .update(email)
    .digest('hex');
};