Array.prototype.myMap = function (callback) {
  var output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }

  return output;
};

Array.prototype.myFilter = function (callback) {
  var output = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }

  return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Testing

var a = [1, 2, 3];

console.log(a.myMap((x) => x * 2)); // [2,4,6]

console.log(a.myFilter((x) => x > 1)); // [2,3]

console.log(a.myReduce((acc, x) => acc + x, 0)); // 6
