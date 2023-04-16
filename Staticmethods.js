class Person{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
    static Create(gender){
        let name = gender == "Male" ? "Manoj" : "Likitha"
        return name

    }
}

let name_gender = Person.Create("Female")
console.log(name_gender)
let name1 = new Person("Manoj")
//name1.getName()
console.log(name1.getName())
