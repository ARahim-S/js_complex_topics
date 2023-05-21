//NEW OBJECT SYNTAX

//1 - Shorthand Properties
// let firstName = "arin",
//   age = 5;

// const myObj = {
//   firstName: firstName,
//   age: age,
// };
// const myObj = {
//   firstName,
//   age,
// };

// console.log(myObj.firstName);
// console.log(myObj.age);

//2- Computed Property names
//ECMA SCRİPT 5 yol -- önce boş bir nesne tanımlayıp sonra atamak gerekiyordu
// let prop1 = "name";
// let myObj = {};
// myObj[prop1] = "arin";
// console.log(myObj);
//ECMASCRIPT 6 da ise dire nesneye atama yapabiliyoruz. genelde kütüphanelerde kullanılır
// let prop1 = "name";
// const myObj = {
//   [prop1]: "arin2",
// };
// console.log(myObj);

//3- Short Method Sytnax
//bu şekilde yazabiliriz
// const person = {
//   firstName: "Ali",
//   lastName: "Ocak",
//   age: 35,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
//kısa şekilde de yazabiliriz
// const person = {
//   firstName: "Ali",
//   lastName: "Ocak",
//   age: 35,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }, //noktadan ve function ifadesinden kurtulduk
// };

// console.log(person.fullName());

//4 - Object Destructuring
// const person = {
//   firstName: "Ali",
//   lastName: "Ocak",
//   age: 35,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }, //noktadan ve function ifadesinden kurtulduk
// };

//eski yöntem
// let myVar1 = person.firstName;
// console.log(myVar1);
// let myVar2 = person.lastName;
// console.log(myVar2);

//destructuring
// let { firstName: myVar1, age: myVar2 } = person;
// console.log(myVar1);
// console.log(myVar2);

//bu şekilden
// let { firstName: firstName, age: age } = person;
// console.log(firstName);
// console.log(age);

//bu şekilde doğru
// let { firstName, age } = person;
// console.log(firstName);
// console.log(age);

// const books = [
//   {
//     title: "sultanın korsanları",
//     author: "ali",
//     pageNum: 358,
//   },
//   {
//     title: "aziz kardeşler",
//     author: "mehmet",
//     pageNum: 458,
//   },
// ];

// for (const { title, author } of books) {
//   console.log(title + " : " + author);
// } //destructuring yaptık burada

//5 - Spread Operator in object literals (...)
//ya var olanı kopyalamada yada birleştirmede kullanırız
// const person = {
//   firstName: "Ali",
//   lastName: "Ocak",
//   age: 35,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }, //noktadan ve function ifadesinden kurtulduk
// };

// const person2 = { ...person };
// console.log(person2);

// //birleştirme için
// const myObj = {
//   name: "arin",
//   age: 6,
// };

// const myObj2 = {
//   job: "student",
//   gender: "male",
// };
// //var olan nesnelerden yeni bir obj oluşturduk
// const myObj3 = { ...myObj, school: "Zehra baysal", ...myObj2 };
// console.log(myObj3);

// 6- REST Operator inObject literals
// const person = {
//   firstName: "Ali",
//   lastName: "Ocak",
//   age: 35,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }, //noktadan ve function ifadesinden kurtulduk
// };

// const { firstName, lastName, age } = person;
// console.log(firstName);

// const { firstName, ...rest } = person; //rest demek zorunda değiliz genel kullanım rest olaraktır
// console.log(firstName);
// console.log(rest);

// 7- Object Values - Object Entries
//es5 te value ve methodları alabiliyorduk
const person = {
  firstName: "Ali",
  lastName: "Ocak",
  age: 35,
  fullName() {
    return this.firstName + " " + this.lastName;
  }, //noktadan ve function ifadesinden kurtulduk
};

console.log(Object.keys(person)); //array içerisinde yazdırabiliriz
console.log(Object.values(person)); //array içerisinde yazdırabiliriz
console.log(Object.entries(person)); //name-value çiftlerini array içinde array olarak döndürür
