/**
 * make-hash
 * Created by dcorns on 8/3/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const crypto = require('crypto');
module.exports = (email, secret) => {
  if(typeof email !== 'string') return '';
  if(typeof secret !== 'string') return '';
  const cipher = crypto.createCipher('aes-256-cbc-hmac-sha256', secret);
  let hash = cipher.update(email,'utf8','hex');
  hash += cipher.final('hex');
  return hash;
};