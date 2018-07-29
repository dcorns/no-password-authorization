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
      if(!dataIn.add || !dataIn.data) return false;
      if(dataIn.add === 'user'){
        if(!dataIn.data.email && !dataIn.data.mobile) return false;
      }
      if(dataIn.add === 'application'){
        if(!dataIn.data.uid || !dataIn.data.name) return false;
      }
      if(dataIn.add === 'name'){
        if(!dataIn.data.admid || !dataIn.data.uid || !dataIn.data.role || !dataIn.data.aid) return false;
      }
      return true;
    default:
      return false;
  }
};