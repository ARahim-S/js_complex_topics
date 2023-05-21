//THIS TOPICS
// VAR OLAN KULLANIM ALANINA GÖRE FARKLI REFERANSLAR VERİR.

//obj.func() ==> this obj referans verir object in methodu olduğu durumda
//this ==> global object ==> window(global) e referans verir

/* console.log(this); //window nesnesidir.
console.log(this.location);
console.log(this.location.href);
console.log(window.location.href);
console.log(this === window); //true döner */
//shift + alt + a toplu yoruma almak

//Function decleration
// function func1() {
//   this.name = "ahmet";
//   // console.log(this === window); //true döner
//   // console.log(this);
//   // console.log("hello from func1");
//   console.log(this.age); //bu şekilde undefined döner çünkü function expressionlar HOISTED YAPMAZ
// }

//function expression
//this burda da global nesneye referance verir
// const func2 = function () {
//   this.age = 40; //global nesneye property ve valu atar
//   // console.log(this === window); //true döner
//   // console.log("hello from func2");
//   console.log(this.name);
// };
// func1();
// func2();
// console.log(name); //ahmet
// console.log(age); //40
// console.log(window.age); //40
// console.log(this.age); //40

//Constructor Function
/* class Person {
  constructor(firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const arin = new Person("arin", "ocak", 5);
const osman = new Person("osman", "ocak", 45);
console.log(arin);
console.log(osman); */
/* 
const Person = {
  name: "arin",
  lastName: "ocak",
  age: 4,
  fullName() {
    console.log(this); //person a işaret eder
  },
  mother: {
    name: "gamze",
    age: 40,
    fullName() {
      console.log(this); //gamzeye işaret eder
    },
  },
};

console.log(Person.fullName());
console.log(Person.mother.fullName()); */

/* const elis = {
  name: "Elis",
  funcy: function () {
    console.log(this === elis);
    console.log(this === window);
  },
};

//console.log(elis.funcy());//true döner
const funcy2 = elis.funcy;//değere atandığında this bu sefer global değişkene window a işaret eder
console.log(funcy2());
 */

const elis = {
  name: "Elis",
  funcy: function () {
    console.log(this === elis); //true döner
    setTimeout(function () {
      console.log(this === elis);
      console.log(this === window);
    }, 2000); //bu fonksiyon method dan bağımsız bir normal fonksiyon olduğu için burada this global değişkene işaret eder
  },
};

console.log(elis.funcy());
