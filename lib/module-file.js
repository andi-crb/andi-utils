var exports = module.exports = {};
exports.filter = function() {};

exports.countIf  = function(testFunc, arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (testFunc(arr[i]) === true) {
      total++;
    }

  }
      return total;
}

exports.filter = function(func, arr) {
  var filteredArr = arr.filter(func);
  return filteredArr;
}

