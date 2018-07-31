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
const addUser = require('./modules/add-user');
exports.handler = (event, context, cb) => {
  if(event.body){
    const data = JSON.parse(event.body);
    if(validateInput('add', data)){
      console.log('add:validation passed');
      if(data.add === 'user' && !data.aid){
        userExists(data.email)
          .then((res1) => {
            console.log('add: response from userExists');
            console.log(res1);
            if(!res1.ID){
              console.log('add: Adding User!');
              addUser(data.email)
                .then((res) => {
                  cb(null, {body: {
                      result: 'user added',
                      user: res,
                    }
                  });
                })
                .catch((err) => {
                  cb(err, null);
                });
            }
            else{
              console.log('add: User already exists');
              cb(null, {body: {
                  result: 'user already exists',
                  user: res1,
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
      console.log('add:validation failed');
      cb({body: 'Data failed validation'}, null);
    }
  }
  else{
    cb({body: 'Must provide valid Input'}, null);
  }
};