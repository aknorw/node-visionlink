export default function (obj1, obj2) {
  for ( var key in obj2 ) {
    try {
      obj1[key] = ( typeof obj2[key] === 'object' ) ? mergeObjects(obj1[key], obj2[key]) : obj2[key]
    } catch (e) {
      obj1[key] = obj2[key]
    }
  }
  return obj1
}
