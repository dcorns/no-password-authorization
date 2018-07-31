/**
 * add
 * Created by dcorns on 7/28/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Expects event.body = {
 *                        add:string (user, application, role),
 *                        if adding user
 *                        email:'valid@email.com',
 *                        and/or
 *                        mobile:'validMobilePhoneNumber',
 *                        if adding user to application
 *                        aid: 'application id'
 *                        admid: 'application owner/adminId,
 *                        if adding application
 *                        uid:'userId',
 *                        name: 'application name'
 *                        if adding role
 *                        admid: 'admin id',
 *                        uid: 'user id',
 *                        aid: 'application id'
 *                        role: 'role'
 *                      }
 */

const validateInput = require('./modules/validate-input');
const userExists = require('./modules/user-exists');
exports.handler = (event, context, cb) => {
  if(event.body){
    const data = JSON.parse(event.body);
    if(validateInput('add', data)){
      console.log('add:validation passed');
      if(data.add === 'user' && !data.aid){
        if(userExists(data.email)){
          console.log('add:User already in database');
        }
        else{
          console.log('Adding main user');
        }
      }
      cb(null, {body: event.body});
    }
    else{
      console.log('add:validation failed');
      cb({body: 'Data failed validation'}, null);
    }
  }
  else{
    cb({body: 'Must provide valid Input'}, null);
  }
};