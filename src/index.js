
exports.min = function min (array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  else if (array.length == 0) {
    return 0;
  }
  else {
    return Math.min.apply(Math, array);
  }
}
exports.max = function max (array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  else if (array.length == 0) {
    return 0;
  }
  else {
    return Math.max.apply(Math, array);
  }
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  else if (array.length == 0) {
    return 0;
  }
  else {
    let result = 0;
    for (let i=0; i<array.length; i++) {
      result += array[i];
    }
    result /= array.length;
    return (result);
  }
}
