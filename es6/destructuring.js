const keyObj = {
  a:1,
  b:2,
  c:3
};

const {a,b,c} = keyObj;
const {a: a1,b: b1,c: c1} = keyObj;
const obj = {
  a
}

const data = {
  services: {password : 'fgdsffsdartghfdasdgf'},
  emails: [
    {address: 'hello@i.ua'},
    {address: 'hello@i.ua'}
  ]
}

const {services: {password}} = data;
const { emails : [emails1, emails2] } = data;

console.log(a,b,c,obj,a1,b1,c1)
console.log(password, emails2, emails1)
