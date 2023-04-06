class Person{
  constructor(name, age, sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
  }


greet()
{
  console.log(`Hello ${this.name}`);
  console.log(`age is ${this.age}`);
  console.log(`sex is ${this.sex}`);
}
}

//let person1 = new Person("Manoj", 29, 'Male');
//person1.greet();

class Student extends Person{
  constructor(name,address, state, Country){
    super(name)
    this.address = address
    this.state = state
    this.Country = Country
  }
  stu1_greet(){
    console.log(`address is ${this.name}`)
    console.log(`address is ${this.address}`)
    console.log(`state is ${this.state}`)
    console.log(`Country is ${this.Country}`)
    
  }
}

let stu1 = new Student('Manoj',"KPHB", 'TEL', 'Ind')

stu1.stu1_greet()