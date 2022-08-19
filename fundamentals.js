//welcome to fundamentals
// https://www.youtube.com/watch?v=lI1ae4REbFM

// console.log("hello world");
// let fname = "leenah";
// let lname = "iqbal";
// console.log(`my name is ${fname} ${lname}`);

// console.log("leenah");

//----------------------------------------------------------------

// // {Variable}
// let name = "Leenah Iqbal"
// console.log(name)

//----------------------------------------------------------------
// // {operators}

// Multiply *
// Devide /
// Plus +
// Subtract _
// Remainder/ Module %
// Exponents ** (2**2 = 4)

//let food = 20;
// console.log(food);

// let tip = 0.2;

// let tipPercentage = food * tip;

// console.log(tipPercentage);

//----------------------------------------------------------
// user input

// let fruit = prompt("enter your fav fod'");
// console.log(fruit);
/*{Example}*/

//let food = Number(prompt("enter price"));
// console.log("food Amount", food);

// let tipPercentage = Number(prompt("enter tip") / 100);
// tipAmount = food * tipPercentage;

// console.log("tip Amount", tipAmount)

// let total = food + tipAmount;
// console.log("total amount", total);

//----------------------------------------------------------------
// Data Type
// Numbers => 123
// string => "abcdefg"
// Array => []
// object => {}
// Bolean => True/False
// undefined
// Null
//-----------------------------------------------------------
//Mathimetical Methods
// Math.floor() rounds down to nearest number
// Maths.ciel() rounds up to nearest number
// Math.random() gives you back randum number between 0 to 1
// if you need range (0 to 10) multiply with that number
// Math.random() * 10

//----------------------------------------------------------
//{Conditionals }
//  Avtivity
//if its rain result umbrella
//else result sunglasses

// let weather = prompt("rain or sunny");
// if (weather == "rain") {
//   console.log("use umbrella")
// }
//   else if(weather == "sunny"){
//     console.log("use sunglasses")
//   }
// else{
//   console.log("dont worry")
// }
//

//-----------------------------------------------------------
//conditional operators
// ==  ===  <  >  <=  >= != !==

//----------------------------------------------------------
// Function
//  function myName(firstName,lastName){
//    fullName = firstName + " " + lastName;
//    console.log(fullName)
//  }
// myName(prompt("what is your first name? "), prompt("what is your last name? "))

// function greetings(name) {
//   //template literals
//   let greeting = `Hi ${name}, How are you doing today?`;
//   console.log(greeting);
// }
// greetings("Leenah");

// //sum
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// let calculate;
// let total;
// let bill;

// function totalAmount(food, tip) {
//   calculateTip = food * (tip / 100);
//   total = sum(food, calculateTip);
//   return total;
// }
// bill = totalAmount(100, 10);
// console.log(` your total bill is: ${bill}`);

// //ES6
// //Arrow function with explicit

// const sum1 = (a, b) => {
//   return a + b;
// };
// console.log(sum1(2, 4));

// //Arrow function with implicit return
// const sum2 = (a, b) => a + b;
// console.log(sum2(4, 5));

// //Exercises
// /*
//   TODO: Write a function that sums two numbers
//   TODO: Write a function that subtracts two numbers
//   TODO: Write a function that divides two numbers.
//   TODO: Write a function that multiplies two numbers.
//   *NOTE* be sure to handle dividing by zero 😉
//   ES5 Syntax: function Add(){}
//   ES6 Syntax (Arrow function): const add = () => {}
// */

// const add = (a, b) => a + b;
// console.log(add(10, 5));

// //Subtract function here
// const sub = (a, b) => a - b;
// console.log(sub(10, 5));
// //Divide function here
// const div = (a, b) => a / b;
// console.log(div(10, 5));
// //multiply function here
// const mul = (a, b) => a * b;
// console.log(mul(10, 5));

//-----------------------------------------------------------
// //Arrays
// groceries = ["banana", "apple", "orange", "pear"];

// console.log(groceries);
// // Indexes Arrays start at 0 index
// console.log(groceries[0]);
// console.log(groceries[3]);

// //Array methods
// //.push()method
// groceries.push("fruits", "vegetable "); //it wont change top console.log
// console.log(groceries);

// //.slice method
// // incluse first argument and exclude second
// console.log(groceries.slice(3, 6));

// //.splice() start from first argument index number and second argument add number of item you want after them.
// console.log(groceries.splice(2));

// //.indexOf
// console.log(groceries.indexOf("apple"));

// //.length
// console.log(groceries.length);

//---------------------------------------------------------
//object

// const person = {
//   name: "Leonardo",
//   shirt: "white",
// };
// // dot notation
// console.log(person.name);
// console.log(person.shirt);

// //braket notation
// console.log(person["shirt"]);

// // assign object
// person.adress = "Uk";
// console.log(person);

// const person1 = {};
// person1.name = "Leenah";
// person1.shirt = "red";
// person1.adress = "UK";

// console.log(person1);

// const introducer = (name, shirt = "white") => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities: 50000,
//     // this become a method need to call like person.networth()
//     netWorth: function () {
//       return this.assets - this.liabilities;
//     },
//   };

//   const intro = `hi my name is ${person.name} and I like ${
//     person.shirt
//   } color shirts and my net worth is $${person.netWorth()} usd`;
//   return intro;
// };
// console.log(introducer("Leenah"));

//-------------------------------------------------------------
//For loops

// fruits = [
//   "banana",
//   "apple",
//   "orange",
//   "pear",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
//   "banana",
//   "apple",
//   "orange",
//   "pear",
// ];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }
//ugly looking loop :( change to new

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// //double allthe number and return array
// let array = [];
// const numbers = [1, 2, 3, 4, 5, 6];
// for (const number of numbers) {
//   array.push(number * 2);
// }
// console.log(array);

// const double = (numbers1) => {
//   let array = [];
//   for (const number of numbers1) {
//     array.push(number ** 2);
//   }
//   return array;
// };

// console.log(double([1, 2, 3, 4, 5, 6]));

// // count length and print each letter of string
// const letterCounter = () => {
//   const phrase = "hey my name is Leenah iqbal";
//   for (let i = 0; i < phrase.length; i++) {
//     console.log(phrase[i]);
//   }
//   console.log(phrase.length);
// };
// letterCounter();

// // add num in array
// const sumArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     result += number;
//   }
//   return result;
// };
// console.log(sumArray([1, 2, 3, 4, 5]));

// // find the Maximum number

// const max = (numbers) => {
//   let results = 0;
//   for (const number of numbers) {
//     if (number > results) {
//       results = number;
//     }
//   }
//   return { results };
// };
// const num1 = [1, 2, 3, 4, 5, 4, 2, 8];
// console.log(max(num1));

// //calculate frequency

// const letterFrequency = (phrase) => {
//   //console.log(phrase) check phrase working step 1

//   // console.log(letter); check letter working step 2
//   // step 3 make frequency object
//   let freqObj = {};
//   for (const letter of phrase) {
//     //check if letter exist in frequency
//     // if true increment the value 1
//     // else set to 1
//     if (letter in freqObj) {
//       freqObj[letter]++;
//     } else {
//       freqObj[letter] = 1;
//     }
//   }
//   return freqObj;
// };
// console.log(letterFrequency("my name is leenah Iqbal"));

// // frequency word

// const wordFreq = (phrase) => {
//   //create freqObj object
//   //let freqObj = {};
//   let array = phrase.split(" "); //seperate string on spaces and return array
//   //console.log(array); itreturn array each word seperted
//   //loop throug phrase tocount word

//   //   for (const word of array) {
//   //     // console.log(word); check loop on array
//   //     if (word in freqObj) {
//   //       freqObj[word]++;
//   //     } else {
//   //       freqObj[word] = 1;
//   //     }
//   //   }

//   //   return freqObj;
//   //or
//   return letterFrequency(array);
// };
// console.log(wordFreq("what is what is what"));

//-------------------------------------------------------
// // higher order function
// //map
// //filter
// reduce
