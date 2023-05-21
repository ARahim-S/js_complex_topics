//OBJECTS
//name ve value çiftlerinden oluşan yapılardır.

//İçerisinde array başkaca object hatta function da olabilir.
//name lastname vb lere PROPERTY denir. 6 tane PROPERTY si vardır.
//function olanlara genelde nesne ile ilişkili ise METHOD denir.
//this bu nesnenin kendisine atıfta bulunur.
//collection of properties
//neden nesneye ihtiyaç duyarız?
//Mesela form kullanıyoruz. Birbirleri ile ilişkili veriler için kullanırız.
//
// const person = {
//   name: "John",
//   lastname: "Doe",
//   age: 36,
//   languages: ["Turkish,English,Spanish"],
//   fullName: function () {
//     return this.name + " " + this.lastname;
//   },
//   address: {
//     city: "Isparta",
//     district: "Merkez",
//   },
// };

//Object Literal
//literal ifadesi== o nesneye ait değerleride giriyoruz.direk ilk baştan belirtiyoruz.

// const person = {
//   name: "John",
//   lastname: "Doe",
//   age: 36,
//   fullName: function () {
//     return this.name + " " + this.lastname;
//   },
// };

// //dot notation

// console.log(person);
// console.log(person.fullName());
// console.log(person.name);

// //Yeni property ekleyebiliriz
// person.job = "Student";

// console.log(person);
// console.log(person.job);

// //bracket notation
// console.log(person["name"]);
// console.log(person["fullName"]());
// console.log(person["na" + "me"]); //---name şeklinde döner

// //Object e object te ekleyebiliriz
// person.address = {};
// console.log(person);

// person.address.city = "Isparta";

// console.log(person);

//CONSTRUCTOR ---> YAPICI İLE OLUŞTURMA

//birden fazla nesne oluşturacaksak constructor ile bir nesne oluşturur ordan türetiriz.
//BÜYÜK harfle başlar

// function Person(name, surname, age) {
//   const obj = {};
//   obj.name = name;
//   obj.surname = surname;
//   obj.age = age;
//   obj.fullName = function () {
//     return obj.name + " " + obj.surname;
//   };

//   return obj;
// }

// const person1 = new Person("John", "Doe", 40);
// const person2 = new Person("Rcardo", "Querasma", 40);
// const person3 = new Person("Ali", "Yilmaz", 40);
// console.log(person1);
// console.log(person2);
// console.log(person3);

// function Person(name, surname, age) {
//   //const obj = {}; //biz bir nesne oluşturacağımızı da biliyoruz Bu sebeple gerek yok
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.fullName = function () {
//     return this.name + " " + this.surname;
//   };

//   //return obj; //biz bir nesne döneceğimizi biliyoruz //bu sebeple gerek yok
// }

// const person1 = new Person("Ahmet", "Koca", 40);
// console.log(person1);

//Object Constructor kullanımı
// const person1 = new Object();
// person1.name = "John";
// person1.lastName = "Doe";
// person1.age = 40;
// person1.fullName = function () {
//   console.log(this);
//   return this.name + " " + this.lastName;
// };

// console.log(person1);
// console.log(person1.fullName());

//Object.create() ile nesne oluşturmak -- 4. yöntem

const person = {
  name: "John",
  lastName: "Doe",
  age: 40,
  fullName: function () {
    return this.name + " " + this.lastName;
  },
};

const soylu = Object.create(person);
soylu.name = "Ali";
soylu.lastName = "Ocaktan";
soylu.age = 45;
console.log(soylu);
console.log(soylu.fullName());
