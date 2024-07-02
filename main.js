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
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

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