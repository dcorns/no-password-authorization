/**
 * authorize
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Expects event.body = {
 *                       appName:'application name',
 *                       if authorizing user
 *                       email:'user email'
 *                       if authorizing application
 *                       rappName:'requesting application name'
 *                      }
 */
'use strict';
exports.handler = (event, context, cb) => {
  cb(null, {body: event.body});
};