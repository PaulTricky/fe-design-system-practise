function curry(callback) {
  const curried = (...args) => {
    if (args?.length >= callback.length) {
      return callback.call(this, ...args);
    }

    return (...nextArgs) => {
      return curried(...args, ...nextArgs);
    };
  };

  return curried;
}

var foo = (a1, a2, a3) => {
  return a1 + a2 + a3;
};

console.log(curry(foo)(1)(2)(3));
console.log(curry(foo)(1)(2, 3));
console.log(curry(foo)(1, 2)(3));
console.log(curry(foo)(1, 2, 3));
