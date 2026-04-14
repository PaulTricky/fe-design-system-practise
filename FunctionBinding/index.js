Function.prototype.myCall = function (context, ...args) {
  const symbol = Symbol();

  context[symbol] = this;

  const result = context[symbol](...args);

  delete context[symbol];

  return result;
};

Function.prototype.myApply = function (context, args) {
  return this.myCall(context, ...args);
};

Function.prototype.myBind = function (context) {
  const fn = this;

  return function (...args) {
    return fn.myCall(context, ...args);
  };
};

// Test

var b = {
  data: 'b',
};

var a = {
  data: 'a',
  call: function (d1, d2) {
    console.log('a is called with', d1, ' and ', d2);
    console.log('data is', this.data);
  },
};

a.call.myBind(b)(1, 2); // a is called with 1 and 2, data is b
a.call.myCall(b, 1, 2); // a is called with 1 and 2, data is b
