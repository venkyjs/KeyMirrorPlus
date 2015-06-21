function keyMirrorPlus(object){
  var keys = (isArray(object)) ? object : Object.keys(object);
  var len = keys.length;
  var mirroredKeys = {}
  for (var idx=0; idx<len; idx++) {
  	mirroredKeys[keys[idx]] = createMirror(keys[idx], object);
  }
  return mirroredKeys
}

function createMirror(key, object){
	if (isObject(object[key]) || isArray(object[key])) {
		return keyMirrorPlus(object[key]);
	} else {
		return key;
	}
}

function isObject(value) {
  var type = typeof value;
  return !!value && (type === 'object');
}

function isArray (value) {
	if (typeof Array.isArray === 'undefined') {
		return Object.prototype.toString.call(value) === '[object Array]';
	} else {
		return Array.isArray(value);
	}
}

module.exports = keyMirrorPlus
