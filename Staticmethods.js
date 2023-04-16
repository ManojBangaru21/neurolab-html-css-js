class Person{
    constructor(name){
        this.name=name
    }

    static Create(gender){
        let name = gender == "Male" ? "Manoj" : "Likitha"
        return name

    }
}

let name_gender = Person.Create("Female")
console.log(name_gender)
