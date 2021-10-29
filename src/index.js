// const Person = require('./class/metodoPublico');
// let marco = new Person({name:'Marco',age : 21})._name;
// console.log(marco);

const Alien = require('./class/metodoPrivado');
let alien1 = new Alien({name:'Guilherme', age: 21, codelanguage: 'Javascript'}).stack();
alien1;