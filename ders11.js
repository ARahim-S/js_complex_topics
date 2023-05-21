//PROMISE
//BİR ASEKRON İŞLEMİN NİHAİ SONUCUNU TEMSİL EDEN BİR JS NESNESİDİR

//bir yer tutucu işlemi görür.

/* const promise1 = new Promise(function (resolve, reject) {
  resolve("data");
  //reject("error");
});

console.log(promise1); */

//resolve (başarılı) - reject (başarısız)

//pending (undefined) ne dönecek bilmiyoruz --fulfilled -- rejected => promise state

//console.log(promise1.value); promise içersiindeki değere direk ulaşamayız.

//bunun yerine başarılı durumlar için then kullanırız.

//Bu şekilde alınabilir // başarılı olduğunda
/* promise1.then(function (value) {
  console.log(value);
}); */

//genel kullanım bir yol //başarılı olduğunda
/* promise1.then((value) => {
  console.log(value);
}); */

//genel kullanım 2. yol // başarılı olduğunda
//promise1.then((value) => console.log(value));
// promise1.catch((reason) => console.log(reason));
/* 
const promise1 = new Promise((resolve, reject) => {
  resolve();
}); */

// promise1.then(() => {
//   console.log("veriler alındı");
// });

// promise1.catch(() => {
//   console.log("veriler alınamadı");
// });

/* promise1
  .then(() => {
    console.log("veriler alindi");
  })
  .catch(() => {
    console.log("veriler ainamadi");
  })
  .finally(() => {
    console.log("her durumda çalişir");
  }); */

//finally her durumda çalışacak koddur.

//az kullanımı

/* const promise1 = new Promise((resolve, reject) => {
  resolve();
  //reject();
});

promise1.then(
  () => {
    console.log("data got succesfully");
  },
  () => {
    console.log("data didn't get.. so sorry");
  }
); */

const addTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  const promise2 = new Promise((resolve, reject) => {
    typeof num1 !== "number" || typeof num2 !== "number"
      ? reject("hata. lütfen sayı giriniz")
      : resolve(sum);
  });
  return promise2;
};

addTwoNumbers(4, 6)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// promise yapıları illaki asenkron değil naşka başka durumlar içinde kullanabiliriz.

//ders notları ekstra

//// PROMISE

/* const books = [
    {name: "Pinball 1973", author: "Haruki Murakami"},
    {name: "Özgürlük", author: "Zygmunt Bauman"},
    {name: "Turkiye'de Çağdaşlaşma", author:"Niyazi Berkes"}
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
} */

/* const addNewBook = (newBook) => {
    books.push(newBook)
}
 */

/* addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"});

listBooks(); */

/* const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
}

addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"}, listBooks); */

/* const promise1 = new Promise(function(resolve, reject) {
    reject('ERROR2');
    resolve('DATA');
    resolve('DATA2');
    reject('ERROR');
    reject('ERROR2');
})

console.log(promise1); */

// pending (undefined) - fullfilled - rejected => PROMISE STATE

/* const promise1 = new Promise(function(resolve, reject) {
    //resolve('DATA');
    reject('ERROR');
}) */

//console.log(promise1.value);

/* promise1.then(function (value) {
    console.log(value)
}) */

/* promise1.then((value) => {
    console.log(value)
}) */

//promise1.then(value =>  console.log(value));
//promise1.catch(reason =>  console.log(reason));

/* const promise1 = new Promise((resolve, reject) => {
    
    //resolve();

    reject();

}) */

/* promise1.then(()=> {
    console.log('VERILER ALINDI');
}); */

/* promise1.catch(()=> {
    console.log('VERILER ALINMADI');
}); */

/* promise1
    .then(()=> {
        console.log('VERILER ALINDI');
    })
    .catch(()=> {
        console.log('VERILER ALINMADI');
    })
    .finally(()=> {
        console.log('ÇALIŞ KÖLE')
    }) */

/* const promise1 = new Promise((resolve, reject) => {
    
    //resolve();
    
    reject();
    
})

promise1.then(()=> {
        console.log('VERILER ALINDI');
},()=> {
    console.log('VERILER ALINMADIIIIII');
}

) */

/* const books = [
  { name: "Pinball 1973", author: "Haruki Murakami" },
  { name: "Özgürlük", author: "Zygmunt Bauman" },
  { name: "Turkiye'de Çağdaşlaşma", author: "Niyazi Berkes" },
];

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};
 */
/* const addNewBook = (newBook, callback) => {
  books.push(newBook)
  callback();
} */

/* const addNewBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
      books.push(newBook)
      //resolve(books)
      reject()
  })

  return promise1
} */

//addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"}, listBooks);

/* addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"})
.then(()=> {
  console.log('Yeni List');
  listBooks();
}).catch(()=> {
  console.log('HATA ALDIK 2')
}) */

/* const addTwoNumbers = (num1, num2) => {
  const promise2 = new Promise((resolve, reject) => {
      const sum = num1 + num2;
      (typeof num1 !== 'number' || typeof num2 !== 'number')
      ? reject('2 SAYI GİRMENİZ GEREKİR')
      : resolve(sum)
  })
  return promise2
}

addTwoNumbers(4,'8')
.then((value) => {
  console.log('TOPLAM: ', value)
})
.catch((reason) => {
  console.log('HATA: ', reason)
}) */
