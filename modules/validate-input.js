/**
 * validate-input
 * Created by dcorns on 7/29/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
'use strict';
module.exports = (dataType, dataIn) => {
  switch (dataType) {
    case 'add':
      if(!dataIn.add) {
        return false;
      }
      if(dataIn.add === 'user'){
        if(!dataIn.email) return false;
      }
      if(dataIn.add === 'application'){
        if(!dataIn.uid || !dataIn.name) return false;
      }
      if(dataIn.add === 'role'){
        if(!dataIn.admid || !dataIn.uid || !dataIn.role || !dataIn.aid) return false;
      }
      return true;
    case 'remove':
      if(!dataIn.remove) {
        return false;
      }
      if(dataIn.remove === 'user'){
        if(!dataIn.email) return false;
      }
      if(dataIn.remove === 'application'){
        if(!dataIn.uid || !dataIn.name) return false;
      }
      if(dataIn.remove === 'role'){
        if(!dataIn.admid || !dataIn.uid || !dataIn.role || !dataIn.aid) return false;
      }
      return true;
    default:
      return false;
  }
};