/**
 * remove
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 * Expects event.body = {
 *                        remove:string (user, application, role),
 *                        data: object (
 *                        if removing user
 *                          {
 *                            email:'valid@email.com',
 *                            and/or
 *                            mobile:'validMobilePhoneNumber',
 *                            if removing user from application
 *                            aid: 'application id'
 *                            admid: 'application owner/adminId,
 *                          }
 *                        if removing application
 *                          {
 *                            uid:'userId',
 *                            name: 'application name'
 *                          }
 *                        if removing role
 *                          {
 *                            admid: 'admin id',
 *                            uid: 'user id',
 *                            aid: 'application id'
 *                            role: 'role'
 *                          }
 *                        )
 *                      }
 */
'use strict';
exports.handler = (event, context, cb) => {
  cb(null, {body: event.body});
};