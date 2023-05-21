//Objects - Part II
//JS hemen hemen tüm nesneler başka bir nesneden türetilerek oluştururlur.
//Buna da o nesnenin prototype ı denir.

//Object literal
const person = {
  name: "Ahmet",
  lastName: "Orman",
  age: 38,
  fullName: function () {
    return this.name + " " + this.lastName;
  },
};

console.log(person);
console.log(person.name);
console.log(person.fullName());
//console.log(person.job);//Undefined döner. çünkü böyle bir property yok
//console.log(person.fullName2());//Böyle bir method yok typeerror verir
console.log(person.toString()); //[object Object] döndü
//person nesnesini oluşturur oluşturmaz prototype a ait bütün methodlara person nesnesi ulaşabilir.
console.log(person.hasOwnProperty("name"));
//Bu sayede persone nesnesi prototype olan objecy nesnesinden hasownproperty methodunu inherit ediyor.

//OBJECT + name,lastName,age,fullName() --- person nesnesini vermiş
//Burda objet e biz ek özellikler veriyoruz
const myObj = {};
console.log(myObj.toString());
//Burda ise temel object nesnesinden türetiyoruz
//OBJECT --- myObj

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + " " + this.surname;
  };
}

const arin = new Person("Arin", "Çekic", 6);

console.log(arin);
console.log(arin.toString());
//Burda ise
// OBJECT  +  name,lastName,age,fullName() ----> Person ------> arin  arin Person constructor dan constructor da OBJECT ten miras aldı ve methodları kullanabildi.
console.log(arin.hasOwnProperty("age")); //true döner

//prototype ını öğrenmek için
console.log(arin.__proto__);

const elis = new Person("Elis", "Çekic", 4);
console.log(elis);
elis.job = "Child";
console.log(elis);
// OBJECT  +  name,lastName,age,fullName() ----> Person + job ------> elis

//elis nesnesinin toString methodunu yada methodlarını değiştirebiliriz

elis.toString = function () {
  return "elisssss";
};

// console.log(elis.toString());
// //prototype zincirine bakar nesnede değiştirisek elis şeklinde dönüş yapar. varolan methodun üzerine yazabiliriz.
// //büyün nesneler kendinden önce gelen neslerden türemiştir.

// //prototype a müdahale etme
// function Person(name, age) {
//   this.name = name;
//   //iki nesne içinde aynı this.surname = surname;
//   this.age = age;
//   //iki nesne içinde aynı this.fullName = function () {
//   return this.name + " " + this.surname;
//   //};
// }

// //propertyler aynı olduğu zaman uygulayabiliriz.
// //bu şekilde Person nesnesinden türetilmiş tüm nesnelere bu propertyler eklendi demek oluyor

// //bu şekilde her nesne için method çalıştırmamızı gerek kalmadı.
// Person.prototype.surname = "Çekic";
// Person.prototype.fullName = function () {
//   return this.name + " " + this.surname;
// };

// const elis2 = new Person("Elis", 4);
// const arin2 = new Person("Arin", 6);

// console.log(elis2);
// console.log(elis2.fullName());
// console.log(arin2.surname);

//Inheritance -- bir nesnenin özelliğinin farklı nesneler tarafından kullanılabilmesi yani miras almasıdır. ecmascript 5
//class lar arasındaki ilişkilerde kullanılır. farklı programlama dillerde.

//prototype inheritance
const personality = {
  name: "xxxxx",
  lastName: "xxxxx",
  age: 0,
};

const arin3 = Object.create(personality);
console.log(arin3);
console.log(arin3.age); //prototype dan aldı
arin3.age = 6;
console.log(arin3.age); //age e deger atadığım için ordan aldı

console.log(arin3.hasOwnProperty("age")); //true döner çünkü property lerinde var
console.log(arin3.hasOwnProperty("lastName")); //false çünkü property olarak yok.arinde. personality nin içinde prototypeta var. bu sebeple false döner

console.log("lastName" in arin3); //true döner. arin nesnesinin hepsine bakar

//hepsinin temel nesnesi Object tir.
