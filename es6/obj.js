

const key = 'test';

const obj = {
  [key]: 1
};

const obj1 = {
  [`temp-${key}`]: 1
};

const obj2 = {
  [func()]: 1
};

function func () {
  return key;
}

console.log( obj, obj1, obj2)