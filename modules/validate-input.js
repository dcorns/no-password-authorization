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
        if(!dataIn.email && !dataIn.mobile) return false;
      }
      if(dataIn.add === 'application'){
        if(!dataIn.uid || !dataIn.name) return false;
      }
      if(dataIn.add === 'name'){
        if(!dataIn.admid || !dataIn.uid || !dataIn.role || !dataIn.aid) return false;
      }
      return true;
    default:
      return false;
  }
};