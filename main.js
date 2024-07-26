// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value);

/**
  |============================
  | 
  |============================
*/

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

/**
  |============================
  | 
  |============================
*/

// const validNumber = Number("51"); // 51
// const validNumberA = Number.isNaN(validNumber);
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// const invalidNumberA = Number.isNaN(invalidNumber);
// console.log(Number.isNaN(invalidNumber)); // true

// console.table({ validNumberA, invalidNumberA });

/**
  |============================
  | 
  |============================
*/

// const min = 50;
// const max = 75;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// const name = 'JavaScript';

// console.log(name.toUpperCase());
// console.log(name[0].toLowerCase());

/**
  |============================
  | Виконаємо рефакторинг, замінивши if...else на тернарний оператор.
  |============================
*/

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

/**
  |============================
  | Лічильник
  |============================
*/

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ");
//   let longestWord = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (longestWord.length < arr[i].length) {
//       longestWord = arr[i];
//     }
//   }
//   console.log(longestWord);
//   // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line
//   let arr = string.split(" ");
//   let longestWord = '';
//   for (let i = 0; i < arr.length; i += 1) {
//     if (longestWord.length < arr[i].length) {
//       longestWord = arr[i];
//     }
//   }
//   console.log(longestWord);
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

/**
  |============================
  | Генератор індетифікаторів
  |============================
*/
// function generateId(){
//   return "_" + Math.random().toString(36).slice(2, length - 1);
// }

// const id = generateId();
// console.log(id);

/**
  |============================
  | spread & rest
  |============================
*/

// function transformObject ({firstName, secondName, address, age}) {
//   return {
//     fullName: `${firstName} ${secondName}`,
//     age,
//     ...address,
//   }
// }

// console.log(transformObject({
//   firstName: 'John',
//   secondName: 'Smith',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'New York'
//   }
// }));

/**
  |============================
  | Callback functions
  |============================
*/

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

//!----------------------------------------------------------------
//* forEach method

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

//!----------------------------------------------------------------
//* filter method 1
// Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// const arr = ["Math", "Match", "Number", "String", "Flex", "Block"];

// const result = arr.filter(e => e.charAt(0).toUpperCase() === "M");
// console.log(result);

//!----------------------------------------------------------------
//* filter method 2
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

//!----------------------------------------------------------------
//* map and flatMap methods
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const mapArr = students.map(student => student.courses);
// console.log(mapArr);// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// const mapFlatArr = students.flatMap(student => student.courses);
// console.log(mapFlatArr); // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

//!----------------------------------------------------------------
//* flatMap and filter methods
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);

//!----------------------------------------------------------------
//* reduce method
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

//!----------------------------------------------------------------
//* sort method
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// const inReverseAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   secondStudent.name.localeCompare(firstStudent.name)
// );
// console.log(inReverseAlphabeticalOrder);

//!----------------------------------------------------------------
// //* apply method of function
// function minOfArray(arr) {
//   let min = Infinity;
//   console.log(min);
//   const QUANTUM = 32768;

//   for (let i = 0; i < arr.length; i += QUANTUM) {
//     const value = arr.slice(i, Math.min(i + QUANTUM, arr.length));
//     const submin = Math.min.apply(
//       null,
//       arr.slice(i, Math.min(i + QUANTUM, arr.length))
//     );
//     console.log(submin);

//     min = Math.min(submin, min);
//   }
//   return min;
// }

// const min = minOfArray([5, 6, 2, 3, 7]);
// console.log(min);

//!----------------------------------------------------------------

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     } else {
//       return onSuccess(`${pizzaName}`);
//     }
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// console.log(pizzaPalace.order("Four cheese", makePizza, onOrderError));

//!----------------------------------------------------------------

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   let newArr = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//     } else {
//       newArr.push(number);
//     }
//   });
//   return newArr;
//   // Change code above this line
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//!----------------------------------------------------------------

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => minAge <= user.age <= maxAge);
// };
// console.log(getUsersWithAge(users, 20, 30));

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));

// // Change code below this line
// const getFriends = (users) => {
//   return users
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);
// };
// // Change code above this line
// console.log(getFriends(users));

//!----------------------------------------------------------------

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// // Change code below this line
// const getTotalFriendCount = (users) => {
//   return users.reduce((acc, user) => acc + user.friends.length, 0);
// };
// // Change code above this line

// console.log(getTotalFriendCount(users));

//!----------------------------------------------------------------
//* this in Global Window
// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" і undefined з "use strict"

//* this in object

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

//* this in arrow function links to global window

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
//   showContext() {
//     const foo = () => {
//       // console.log("this in showContext: ", this);
//     };
//     console.log("this in showContext: ", this);
//   },
// };

// user.showContext(); // this in showThis: window

//* this in arrow function with bind method

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

// var f = function () {
//   console.log(1);
// };

// var execute = function (f) {
//   setTimeout(f, 1000);
// };

// execute(f); // что выведет в консоль и почему

// f = function () {
//   console.log(2);
// };

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(input) {
//   let newArr = [];
//   let sumpos = input.filter((i) => i >= 0).reduce((acc, i) => acc + i, 0);
//   console.log(sumpos);
//   let sumneg = input.filter((i) => i < 0).reduce((acc, i) => acc + i, 0);
//   console.log(sumneg);
//   newArr.push(sumpos, sumneg);
//   return newArr;
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

// function invert(array) {
//   const newArr = array.map((elem) => (elem === 0 ? 0 : -elem));
//   console.log(newArr);
// }

// invert([0]);

// function digitize(n) {
//   //code here
//   return Array.from(String(n))
//     .reverse()
//     .map((elem) => Number(elem));
//   // .toString()
//   // .split("")
//   // .map((elem) => Number(elem))
//   // .reverse();
// }

// console.log(digitize(32521)); // [1, 2, 3, 4, 5]

// function getGrade(s1, s2, s3) {
//   // Code here
//   const score = (s1 + s2 + s3) / 3;

//   if (score >= 0 && score < 60) {
//     return "F";
//   } else if (score >= 60 && score < 70) {
//     return "D";
//   } else if (score >= 70 && score < 80) {
//     return "C";
//   } else if (score >= 80 && score < 90) {
//     return "B";
//   } else if (score >= 90 && score <= 100) {
//     return "A";
//   }
// }

// function getGrade(s1, s2, s3) {
//   // Code here
//   const score = (s1 + s2 + s3) / 3;

//   switch (score) {
//     case score < 60:
//       return "F";
//       break;
//     case score < 70:
//       return "D";
//       break;
//     case score < 80:
//       return "C";
//       break;
//     case score < 90:
//       return "B";
//       break;
//     case score <= 100:
//       return "A";
//       break;
//   }
// }

// console.log(getGrade(85, 92, 88)); // "B"

// function past(h, m, s) {
//   //#Happy Coding! ^_^
//   const Hours = h * 60 * 60 * 1000;
//   const Minutes = m * 60 * 1000;
//   const Seconds = s * 1000;
//   const totalTime = Hours + Minutes + Seconds;
//   return totalTime;
// }

// console.log(past(0, 1, 1)); // "It's 01:02:03"

// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   return dna
//     .split("")
//     .map((elem) => (elem === "T" ? "U" : elem))
//     .join("");
// }

// console.log(DNAtoRNA("ATCG")); // "AUCG"

// var summation = function (num) {
//   // Code here
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

// const summation = (n) => (n * (n + 1)) / 2;

// console.log(summation(8)); // 36

// var countSheep = function (num) {
//   //your code here
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     if (num === 0) {
//       return "";
//     }
//     result += `${i} sheep...`;
//   }
//   return result;
// };
// console.log(countSheep(10));

// function isIsogram(str) {
//   return str
//     .toLowerCase()
//     .split("")
//     .every((elem, index, array) => array.indexOf(elem) === index);
// }

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size === str.length;
// }

// console.log(isIsogram("aba")); // true

// function dnaStrand(dna) {
//   const arr = dna.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "A") {
//       arr[i] = "T";
//     } else if (arr[i] === "T") {
//       arr[i] = "A";
//     } else if (arr[i] === "C") {
//       arr[i] = "G";
//     } else if (arr[i] === "G") {
//       arr[i] = "C";
//     }
//   }
//   return arr.join("");
// }

// function DNAStrand(dna) {
//   return dna
//     .split("")
//     .map((elem) => {
//       return { A: "T", T: "A", C: "G", G: "C" }[elem];
//     })
//     .join("");
// }

// console.log(DNAStrand("ATTGC")); // "TAACG"

// function longest(s1, s2) {
//   return s1
//     .split("")
//     .concat(s2.split(""))
//     .sort((a, b) => a.localeCompare(b))
//     .filter((elem, index, arr) => arr.indexOf(elem) === index)
//     .join("");
// }

// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
// "abcdefghilnoprstu"

// function removeChar(str) {
//   //You got this!
//   const arr = str.split("");
//   const newArr = arr.slice(1, arr.length - 1);
//   return newArr.join("");
// }

// console.log(removeChar("eloquent")); // "loquen"

// function simpleMultiplication(number) {
//   // your code........
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(9)); // 81

// String.prototype.toJadenCase = function () {
//   return this.toLowerCase()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// console.log("How can mirrors be real if our eyes aren't real".toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// function highAndLow(numbers) {
//   const newArr = [];
//   const arr = numbers
//     .split(" ")
//     .map((number) => Number(number))
//     .sort((a, b) => b - a);
//   newArr.push(Math.max(...arr), Math.min(...arr));
//   return newArr.join(" ");
// }

// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// console.log(highAndLow("42")); // "42 -9"

// function findAverage(array) {
//   // your code here
//   return array.length > 0
//     ? array.reduce((acc, elem) => acc + elem, 0) / array.length
//     : 0;
// }

// console.log(findAverage([1, 2, 3, 4, 5])); // 3

// const greet = () => `${hello()} ${world()}${symbol()}`;

// const hello = () => {
//   const word = "olleh";
//   return word.split("").reverse().join("");
// };

// const world = () => {
//   const word = "WoRlD";
//   return word.split("").join("").toLowerCase();
// };

// const symbol = () => {
//   return hello() && world() ? "!" : "?";
// };

// console.log(greet());

// function smash(words) {
//   return words.join(" ");
// }

// console.log(smash([])); // 'hello world'

// function repeatStr(n, s) {
//   let returnStr = "";
//   for (let i = 1; i <= n; i++) {
//     returnStr += `${s}`;
//   }
//   return returnStr;
// }

// console.log(repeatStr(5, "I")); // "IIIIII"

// const reverseSeq = (n) => {
//   if (n > 0) {
//     return [n].concat(reverseSeq(n - 1)); // recursive call to reverse the sequence
//   }
//   return [];
// };

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

console.log(reverseSeq(6)); // [5, 4, 3, 2, 1]
