# JavaScript ES6 Summary

## Var vs Let vs Const

Var, Let and Const these three keywords are used to define variables in JavaScript. Let and const are the ES6 features which JavaScript introduce lately.

Var is the functional scope variable - which means we can use variable that declare with var is accessible in whole function.

But let and const are the block scope variables - which means we can only use them in that particular code block, in which they are defined.

## Arrow Function

Arrow function is the another way to define function. By using arrow function syntax we can define JavaScript functions more easily.

```js
// Defining function using function keyword
function sayHello() {
  console.log("Hello JavaScript World!");
}

// Defining function using arrow function
const sayHello = () => {
  console.log("Hello JavaScript World!");
};
```

## Accessing the objects

First of all, object is collection of similar type of data and storing them in key value pair.

There are two ways to access the objects properties:

```js
const user = {
  name: "Harley",
  email: "harley07@gmail.com",
};

console.log(user.email); // Output: harley07@gmail.com
console.log(user["email"]); // Output: harley07@gmail.com
```

## Object Destructuring

By using object destructuring, we can get properties as variables in just one line.\

```js
const user = {
  name: "Sam",
  email: "samEmail@gmail.com",
  country: "US",
};

// const name = user.name;
// const email = user.email;
// const country = user.country;

const { name: userName, email, country } = user;

console.log(userName, email, country);
```

## Array .map method

In react, .map method is used to display elements in our web-page and It will always returns a new array. So here is the example for that. We have list of products and we want to display them on our web-page.

In map method, we have to pass callback function which runs for each item and we can get that each item value in first parameter.

Now whatever we return from our call back function, it will add in new array.

```js
const products = ["Product1", "Product2", "Product3"];

const displayItems = products.map((product) => `<li>${product}</li>`);

console.log(displayItems); // Output: ["<li>Product1</li>", "<li>Product2</li>", "<li>Product3</li>"]
```

## Array .filter method

Filter method is used to filter data from array and also it will return a new array.

In filter method we pass function as argument and in that function we have to pass condition. Now which element pass that condition only that element will added in the new array.

```js
const ages = [5, 23, 14, 30, 21];

console.log(ages); // Output: [5, 23, 14, 30, 21]

const adults = ages.filter((age) => age >= 18);

console.log(adults); // Output: [23, 30, 21]
```

## Spread operator (…)

Spread operator is used to get all items from array/object. Let’s see with example.

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];

const numbers = [...arr1, 5, 6, ...arr2];
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

In this example, we get all arr1 and arr2 items using spread operator and add them in our new array which is numbers array.

In simple words, …arr1 means we get 1, 2, 3, 4

We can also use this spread operator in objects for getting the objects values.

## Ternary Operator

Ternary operator also known as conditional operator which is the shortcut way to write if else condition.

```js
const marks = 30;
const result = marks > 35 ? "Pass" : "Fail";

console.log(result); // Output: "Fail"

//syntax - condition ? trueExpression : falseExpression
```

## Modules

Module is a file that contains code to perform specific task. It can contain variables, objects, functions and so on.

Imagine we have 5 features in single file, then we can divide each feature in single file called as module and then use them where we need it.

Now to use function in other modules, we need to export that function from that module with export keyword.

```js
// post.jsx
export function post() {
  console.log("This is post");
}

// feed.jsx
import { post } from "./post";

export function feed() {
  console.log("This is feed");
  post();
  post();
  post();
}

// main.jsx
import { feed } from "./feed";

feed();
```

Now we have another method to export function or variable from our module which is by using export default

Mostly, we will use export our main function of our module as default export. The difference is only in import statement.
