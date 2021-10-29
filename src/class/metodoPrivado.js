class Person{
    #name;
    #age;
    constructor({name, age}){
        this.#name = name;
        this.#age = age;
    }
    speak(){
        return console.log(`Your name is ${this.#name} and your age is ${this.#age}`);
    }
}
module.exports = Person;