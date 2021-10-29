// const Person = require('./class/metodoPublico');
// let marco = new Person({name:'Marco',age : 21})._name;
// console.log(marco);

const Person = require('./class/metodoPrivado');
let gui = new Person({name:'Guilherme', age: 21}).speak();
console.log(gui);