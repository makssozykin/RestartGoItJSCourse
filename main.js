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

const min = 50;
const max = 75;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

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

