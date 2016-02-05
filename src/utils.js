'use strict';

exports.mergeObjects = function(obj1,obj2) {
  for (var key in obj2) {
    try {
      if (typeof obj2[key] === 'object') {
        obj1[key] = mergeObjects(obj1[key],obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    } catch (e) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}
