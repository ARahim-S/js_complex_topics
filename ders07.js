//CLASS DECLARATION
//JS de class aslında özel bir fonksiyonlardır.
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.friends = ["ela", "rüzgar"];
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   static showName = "Person"; // bu sadece classın propertysidir.
//   static staMethod() {
//     console.log("here static");
//   } // bu sadece classın methodudur. instancelar ulaşamaz
// }

//console.log(typeof Person);function döner

//constructor -- hafizada yeni obje oluşturur.
// ve this i bu objeye bağlar.

//instance person classının instance dır.

// const arin = new Person("arin", "ocak", 6);
// const elis = new Person("elis", "ocak", 4);

// console.log(arin instanceof Person); //true döner
// console.log(elis instanceof Person); //Person class ının instance dır. true döner
// console.log(Person.fullName()); //typeerror verir.

// console.log(arin.showName); //undefined döner
// console.log(arin.staMethod()); //typeerror verir.

// console.log(Person.showName); //Person yazar
// console.log(Person.staMethod()); //here static yazar

//Class ihtiyacın en temel sebebi şudur.
//Programlamayı modüler hale getirir. Class lar oluşturarak ilişkilendiririz. Şablon işlevi görür.

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.friends = ["ela", "rüzgar"];
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Engineer extends Person {} //Yeni bir engineer classı oluşturdum. Bu class Person classına ait olan tüm property leri ve methodları içeriyor. //extends genişletmek demektir.
// //Enginner --> Subclass (Child) / Person --> SuperClass tır.

// const arin = new Person("arin", "ocak", 6);
// const john = new Engineer("john", "doe", 42);
// console.log(john);

// OBJECT + (firstName,lastname ...)  => Person

// Person => Engineer tüm özelliklerini persondan çekiyor.

// console.log(arin instanceof Person); //true
// console.log(john instanceof Engineer); //true
// console.log(john instanceof Person); //true
// console.log(arin instanceof Engineer); //false döner

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Engineer extends Person {
//   constructor(firstName, lastName, age, job) {
//     super(firstName, lastName, age);
//     this.job = job;
//   }

//   getMoney() {
//     console.log("get money please");
//   }
// }

// const arin = new Person("arin", "ocak", 15);
// console.log(arin);
// const engineerOsman = new Engineer("osman", "ocak", 46, "student engineer");
// console.log(engineerOsman);
// console.log(engineerOsman.getMoney());
// console.log(arin.getMoney()); //hata alırsın engineer class ının instance ı değildir.

// OBJECT + (firstName,lastname,age)  => Person

// Person + job,getMoney() => Engineer

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Engineer extends Person {
//   constructor(firstName, lastName, age, job) {
//     super(firstName, lastName, age);
//     this.job = job;
//   }
//   //super class ı atlarsan hata verir. Sebebi object i Person üzerinden oluşturduğu için super şeklinde super class dan parametreleri almak gerekiyor

//   getMoney() {
//     console.log("get money please");
//   }
// }

class ExtendedArray extends Array {
  shuffle() {
    this.sort(() => Math.random() - 0.5);
  }
}

const myArr = new ExtendedArray(1, 2, 3, 4, 5);

console.log(myArr instanceof ExtendedArray); //true döner
console.log(myArr instanceof Array); // true döner

console.log(myArr);
myArr.shuffle();
console.log(myArr);
