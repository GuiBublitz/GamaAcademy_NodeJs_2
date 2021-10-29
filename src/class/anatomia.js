class Person{
    #name;
    #age;
    constructor({name, age}){
        this.#name = name
        this.#age = age
    }
    speak(){
        return console.log(`Seu nome é ${this.#name} e sua idade é de ${this.#age}`)
    }
}

class Employee extends Person {
    constructor(){
        
    }
}

module.exports = Person;