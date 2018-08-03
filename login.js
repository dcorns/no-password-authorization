/**
 * login
 * Created by dcorns on 8/3/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
const config = require('./config');
const makeHash = require('./modules/make-hash');
exports.handler = (event, context, cb) => {
  if(event && event.email) {
    const hash = makeHash(event.email, config.SECRET);
    cb(null, {body: hash});
  }
  else{
    cb({body:"Error: No Data provided for login"}, null);
  }
};