//senkron-asenkron js - call stack - thread - callback fonksiyonlar

//js single thread dir // tek bir iş parçacığı yapma
//js Synchronous tur // sıralı şekilde çalışmadır

//Aynı anda tek işlem yapar ve sıralı şekilde yapar

//Call stack --Bizim açımızdan fonksiyonların çalışma sırasını gösterir.

//call stack teki işlemleri tamamlar. Sonra callbackler çalışır. Callback kuyruğuna sıraya alır ve sırasıyla işlemleri yaptırır call stack ten sonra.

//call back fonksiyonlar

//bir bildirim fonksiyonudur. durum bildiren fonksiyonlardandır.
//bir fonksiyon başka bir fonnksiyona argüman olarak geliyorsa call back fonksiyonudur.

//en önemli kullanılan alanlardan event listener dır.

// JS Single Thread
// JS Synchronous

/* const func1 = () => {
    console.log("Func 1 Console Log 1");

    console.log("Func 1 Console Log 2");

    alert('Alert Message');
}

const func2 = () => {
    console.log("Func 2 Console Log 1");

    console.log("Func 2 Console Log 2");
}

func1();
func2(); */

/* let x = 10;
console.log("1. Gelen Veri", x);


setTimeout(() => {
    x = x + 5;
}, 1000)

console.log("2. Gelen Veri", x);



x = x + 5;
console.log("3. Gelen Veri", x); */

// Call Stack

/* function func1() {
    console.log("Ben birinciyim");
    func2();
    console.log("Ben tekrar birinciyim");
}

function func2() {
    console.log("Ben ikinciyim");
    func3();
    console.log("Ben tekrar ikinciyim");  
}

function func3() {
    console.log("Ben üçüncüyüm");
}

func1(); */

/* function add(x, y) {
    return x + y;
}

function average(x,y) {
    return add(x, y) / 2
}

let x = average(6, 8); */

/* function task(message) {
    let n = 10000000000;
    while(n > 0) {
        n--
    }

    console.log(message);
}

console.log('1');

setTimeout(()=> {
    console.log('2');
}, 1000)

console.log('3');
console.log('4');

task('İşlem Tamamlandı');

setTimeout(()=> {
    console.log('5');
}, 2000)

task('İşlem Tamamlandı 2');
 */

/* const myName = () => {
    console.log("Benim adım Arin");
}

setTimeout(myName, 3000); */

/* setTimeout(() => {
    console.log("Benim adım Arin");
}, 3000); */

const books = [
  { name: "Pinball 1973", author: "Haruki Murakami" },
  { name: "Özgürlük", author: "Zygmunt Bauman" },
  { name: "Turkiye'de Çağdaşlaşma", author: "Niyazi Berkes" },
];

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNewBook = (newBook, callback) => {
  books.push(newBook);
  callback(); //buraya call back olarak ekledik çünkü önce yeni kitabın eklenmesini ve sonra da listelenmesini istiyoruz. calback que kuyruğuna ekliyoruz.
};

addNewBook({ name: "Berlin Hatıralım", author: "Hüsrev Gerede" }, listBooks);
