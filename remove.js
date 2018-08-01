/**
 * remove
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Expects event.body = {
 *                        remove:string (user, application, role),
 *                        if removing user
 *                        email:'valid@email.com',
 *                        and/or
 *                        mobile:'validMobilePhoneNumber',
 *                        if removing user from application
 *                        aid: 'application id'
 *                        admid: 'application owner/adminId,
 *                        if removing application
 *                        uid:'userId',
 *                        name: 'application name'
 *                        if removing role
 *                        admid: 'admin id',
 *                        uid: 'user id',
 *                        aid: 'application id'
 *                        role: 'role'
 *                      }
 */
'use strict';
const validateInput = require('./modules/validate-input');
const getUserByEmail = require('./modules/get-user-by-email');
const removeUser = require('./modules/remove-user');
exports.handler = (event, context, cb) => {
  if(event.body){
    const data = JSON.parse(event.body);
    if(validateInput('remove', data)){
      console.log('remove:validation passed');
      if(data.remove === 'user' && !data.aid){
        getUserByEmail(data.email)
          .then(user => {
            console.log('remove: response from getUserByEmail');
            console.log(user);
            if(user.ID){
              console.log('remove: Removing User!');
              removeUser(user.ID)
                .then((res) => {
                  if(res){
                    console.log('remove: user removed');
                    cb(null, {body: {
                        result: 'user removed',
                      }
                    });
                  }
                  else{
                    console.log('remove: failed to remove user!')
                    cb(null, {body: {
                        result: 'user not removed',
                      }
                    });
                  }
                })
                .catch((err) => {
                  cb(err, null);
                });
            }
            else{
              console.log('remove: User does not exist');
              cb(null, {body: {
                  result: 'user does not exist',
                }
              });
            }
          })
          .catch((err) => {
            console.log('add: ERROR checking for existing user');
            console.log(err);
          });
      }
      cb(null, {body: event.body});
    }
    else{
      console.log('remove:validation failed');
      cb({body: 'Data failed validation'}, null);
    }
  }
  else{
    cb({body: 'Must provide valid Input'}, null);
  }
};