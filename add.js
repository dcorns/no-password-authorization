/**
 * add
 * Created by dcorns on 7/28/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Expects event.body = {
 *                        add:string (user, application, role),
 *                        data: object (
 *                        if adding user
 *                          {
 *                            email:'valid@email.com',
 *                            and/or
 *                            mobile:'validMobilePhoneNumber',
 *                            if adding user to application
 *                            aid: 'application id'
 *                            admid: 'application owner/adminId,
 *                          }
 *                        if adding application
 *                          {
 *                            uid:'userId',
 *                            name: 'application name'
 *                          }
 *                        if adding role
 *                          {
 *                            admid: 'admin id',
 *                            uid: 'user id',
 *                            aid: 'application id'
 *                            role: 'role'
 *                          }
 *                        )
 *                      }
 */

const validateInput = require('./modules/validate-input');

exports.handler = (event, context, cb) => {
  if(event.body && validateInput('add', event.body)){
    console.log(event.body);
    if(event.body.add === 'user'){
      console.log('Adding main user');
      if(event.body.data){

      }
    }
    cb(null, {body: event.body});
  }
  else{
    cb({body: 'Must provide valid Input'}, null);
  }
};