//JS CLASSES

//constructor function

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const arin = new Person("ali", "ocak", 25);
// console.log(arin);
// Person.prototype.friends = ["ela", "rüzgar"];
// console.log(arin.friends);
// const elis = new Person("elis", "ocak", 3);
// console.log(elis);
// console.log(elis.friends);

// arin.friends.push("kızıl");
// console.log(arin.friends);
// console.log(elis.friends); //elis e de eklendi prototype da değişiklik olduğu için

//constructor fonksiyonuna property ekleyebiliriz.. özellikle bir property eklediğimiz zaman her yeni nesne ürettiğimizde property üretilir ve bu da zamanla programla yavaşlama yapar.
//bu yavaşlamayı önlemek için prototype a ekleme yapabilirz fakat prototype da yaptığımız bir değişiklik diğer türetilmiş bütün nesneleri etkileycektir. Bu sebeple class lar kullanılmaktadır.

//class structure
//Büyük harfle başlar genel yaklaşım bu şekildedir fakat zorunluluk değildir.

//CLASS DECLARATION
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

//CLASS EXPRESSION
const Person = class {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.friends = ["ela", "rüzgar"];
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};

const arin = new Person("ali", "ocak", 25);
//new ile hemen hafızada yer ayrılır.
//new keywordü ile this arinin yerini alır.
//constructor fonksiyonu hemen çalışır atamalar yapılır.
//class larda methodlar proto içerisinde yer alır
//Yapılan şey aslında class ile daha okunabilir bir kod yazmaktır.
const elis = new Person("elis", "ocak", 3);
console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());
console.log(arin);

console.log(arin.friends);
console.log(elis.friends);
arin.friends.push("kızıl");
console.log(arin.friends); //yeni arkadaş aeklendi
console.log(elis.friends); //ekleme olmadı

console.log(Person);
console.log(typeof Person); //js class lar aslında özel oluşturulmuş fonksiyonlardır.
