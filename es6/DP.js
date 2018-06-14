const dp = (a = 1, b = 2, c = cdp(), d = {}) => {

  return [a,b,c,d];
}

function cdp() {

  return 3;
}

const dpAllArgs = function (...args) {

  return args;
}

const dpPaiceArgs = function (a = 1, b = 2, ...args) {

  return args;
}

console.log(dp());
console.log(dpAllArgs(1,{a:2},[1,2,3]));
console.log(dpPaiceArgs(2,2,2,2));