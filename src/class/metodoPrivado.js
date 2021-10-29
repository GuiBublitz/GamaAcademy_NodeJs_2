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
    set name(string){
        this.#age = string;
    }
    get name(){
        return this.#name;
    }
    set age (number){
        this.#age = number;
    }
    get age(){
        return this.#age;
    }

}
class Alien extends Person {
    #codelanguage
    constructor({name, age, codelanguage}){
        super({name, age});
        this.#codelanguage = codelanguage;
    }
    stack(){
        return console.log(`Hi ${this.name}, I see here that you're ${this.age} years old. Are you realy trying to be a ${this.#codelanguage} developer at this age??`);
    }
}
module.exports = Alien;