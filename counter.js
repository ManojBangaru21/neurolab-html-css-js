// class Person{
//   constructor(name, age, sex){
//   this.name=name;
//   this.age=age;
//   this.sex=sex;
//   }


// greet()
// {
//   console.log(`Hello ${this.name}`);
//   console.log(`age is ${this.age}`);
//   console.log(`sex is ${this.sex}`);
// }
// }

// //let person1 = new Person("Manoj", 29, 'Male');
// //person1.greet();

// class Student extends Person{
//   constructor(name,age,address, state, Country){
//     super(name,age)
//     this.address = address
//     this.state = state
//     this.Country = Country
//   }
//   stu1_greet(){
//     console.log(`name is ${this.name}`)
//     console.log(`age is ${this.age}`)
//     console.log(`address is ${this.address}`)
//     console.log(`state is ${this.state}`)
//     console.log(`Country is ${this.Country}`)
    
//   }
// }

// let stu1 = new Student('Manoj',29,"KPHB", 'TEL', 'Ind')

// stu1.stu1_greet()


class Person{
  constructor(name,occupation){
    this.name = name;
    this.occupation = "BA" ;
  }

  greet(){
    console.log(`Name is ${this.name}` )
    console.log( `Occupation is ${this.occupation}`)
  }

}

class Student extends Person{
  constructor(name,occupation){
    super(name)
    this.occupation = "Senior BA"
  }
  greet(){
    console.log(`Name is ${this.name}`);
    console.log( `Occupation is ${this.occupation}`);
  }
}
 
let obj1 = new Student("Manoj");
obj1.greet();
let obj2  = new Person("Deepu");
obj2.greet();