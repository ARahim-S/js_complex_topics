//Arrow Functions

/* const square = (num) => num * num;
console.log(square(5));

window.name = "arin";

const person = {
  name: "elis",
  tellName: () => {
    console.log(this);
    console.log(this.name);
  },
}; //arrow functionda this ait olduğu bir dizini yoktur. bu sebeple this window a referans verir */

//person.tellName();

/* window.firstName = "arin";

const person = {
  firstName: "elis",
  lastName: "ocak",

  tellName: function () {
    console.log(this);
    console.log(this.firstName); //method olduğu için elie atıfta bulunur

    setTimeout(function () {
      console.log(this);//burada bağımsız fonksiyon olduğu için window nesnesinit emsil eder
      console.log(this.name);
    }, 2000);
  },
};

person.tellName(); */

/* window.firstName = "arin";

const person = {
  firstName: "elis",
  lastName: "ocak",

  tellName: () => {
    console.log(this); //arrow function olduğu için window nesnesini temsil eder
    console.log(this.firstName);

    setTimeout(() => {
      console.log(this); //arrow function olduğu için window nesnesini temsil eder
      console.log(this.name);
    }, 2000);
  },
};

person.tellName();
 */

/* window.firstName = "arin";

const person = {
  firstName: "elis",
  lastName: "ocak",

  tellName: function () {
    console.log(this); //function decleration olduğu için window nesnesini temsil eder
    console.log(this.firstName);

    setTimeout(() => {
      console.log(this); //arrow function olduğu için bir üst dizinden alır ve bu sayede person objesi döner
      console.log(this.firstName); //elis döner
    }, 2000);
  },
};

person.tellName(); */

//Arrow function ile constructor fonksiyon oluşturulamaz

/* const Person = (firstName, lastName, age) => {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const person1 = new Person("ali", "ocak", 46);
console.log(person1); */

//

/* const myObj = {
  year: 2020,
  showYear1: function () {
    console.log(this.year, this); //objeye atıfta bulunur
  },
  showYear2: () => console.log(this.year, this), //bir üst dizini olmadığı için undefined döner. this ise window a atıfta bulunur. Ayrıca window.year:"2023" gibi bir şey olmadığı çin bulamaz ve undefined verir
};

myObj.showYear1();
myObj.showYear2();
 */

//CALL
//Başka bir objeye ait olan methodu başka bir nesne tarafından çağırmak için kullanılır

window.firstName = "gürcan"; //Burada tanımlama yapılış olsa bile bu şekildeki syntax ta tanımlama olmaz
window.grade = 100;

const student = {
  examResult: function () {
    return this.firstName + " " + this.grade;
  },
};

//Fakat function decleration değilde arrow function kullanırsak functiona ait this omadığı için globalde bulunan window değişkjenlerini uygular

const student4 = {
  examResult: () => {
    return this.firstName + " " + this.grade;
  },
}; //arrow olduğu için globalden alır

const student1 = {
  firstName: "arin",
  grade: "85",
};

const student2 = {
  firstName: "elis",
  grade: "77",
};

console.log(student.examResult.call(student1)); //arin 85
console.log(student.examResult.call(student2)); // elis 77
console.log(student4.examResult.call(student1)); //gürcan 100
console.log(student4.examResult.call(student2)); //gürcan 100
