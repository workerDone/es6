// concat {}
// return new object
const key = Object.assign({},{a:3},{b:4,a:2});

//the same when ..."spred Operator but longer opp"

const a = {a:3};
const b = {b:4};
const c = {c:5};

const key1 = {...a,...b,...c}
console.log(key, key1)