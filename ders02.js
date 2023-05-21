/*
Fonksiyonlar
function decleration/statement
HOISTED yapılır.
*/

console.log(square(5));
//Yukarıda da bu şekilde çalıştırabiliriz.function decleration olduğu için.
function square(num) {
  return num * num;
}

//console.log(square(5));

/*
Function expression: Fonksiyonun değişkene atanmasıdır.
Function expression HOISTED olmaz. Undefined döner.
Function name kullanılabilir. Fakat optional dır.
*/
const square2 = function (num) {
  return num * num;
};
//Örnek olarak isim de verebiliriz. Optionaldır.
// const square = function multiply(num) {
//   return num * num;
// };

/*
Eğer bir fonksiyon değişkene atanırsa FIRST-CLASS FUNCTİON gibi davranabiliriz.
Bir değşken gibi davranabiliriz.
*/
//Dizi içerisinde kullanımı
const myArr = [
  16,
  "Ahmet",
  function () {
    console.log(15);
  },
];

myArr[2](); //15 döner

//Object içerisinde kullanımı
const myObject = {
  name: "Ali",
  age: 5,
  func: function () {
    console.log(20);
  },
};

myObject.func(); //20 döner

//console.log içerisinde kullanımı

console.log(
  20 +
    (function () {
      return 10;
    })()
); //30 döner burada ayrıca IIFE(Immediately Invoke Function Expression) vardır.

//Bir fonksiyonu başka bir fonksiyona parametre olarak atayabiliriz
//First Class Fonksiyonlar diğer fonksiyonları parametre oalrak alabilirler.
const fiveAdd = function (num, func) {
  return num + func();
};

let result = fiveAdd(4, function () {
  return 5;
});

console.log(result); //9 döner

//Bir fonksiyon içerisinde başka bir fonksiyonu return edebilir.
const myFunc = function (num) {
  return function toDouble() {
    console.log(num * 2);
  };
};

myFunc(4)();

//IIEF (Immediately Invocable Function Expression)
//Bir fonksiyonun çalıştırıldığı anda çağrılmasıdır.
//Sayfan yüklenirken olması istediğin işleri yaptırabilirsin.

(function () {
  console.log(12 + 5);
})(); //17 döner
//eğer function ı parantezler içerisine almazsan function statement ismi eksik hatası alırısn. bunun sebebpi js engine function ifadesini görünce bunu function statement olarak sayar ve isim arar. Bu sebeple () arasına alırız.

//Javascripte de fonksiyonlar birer NESNEdir.OBJECT tir. Property leri olmak zorundadır.

function square3(num1, num2) {
  console.log(num1 * num2);
}
console.log(square3.name); //sqaure 3 döner
console.log(square3.length); //2 döner parametreleri alır
