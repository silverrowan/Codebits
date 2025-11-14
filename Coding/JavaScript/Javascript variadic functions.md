---
tags:
  - jargon
  - JavaScript
  - function
  - argument
---
## Create a [[Variadic Function]]
- JavaScript does not have native support for [[Variadic Function|variadic functions.]]
### Using arguments object
- *However* there is an 'arguments' object available inside every function, that allows you to access all arguments passed to the function!
    - An argument object is like an array of arguments of functions
```js title:"ex variadic function via argument object"
  function SumOfNum() {
      let total = 0
      for (let i = 0; i < arguments.length; i++) {
          total += arguments[i]
      }
      return total;
  }
  ```
### Using Rest parameter
- the [[rest parameter]] allows you to collect a variable number of arguments into an array parameter.
- to achieve variadic functions behavior using the rest parameter you can define a single argument inside a function using the rest operator.
```js title:"variadic function via rest parameter"
  function SumOfNum(...numbers) {
      let total = 0
      for (let i = 0; i < numbers.length; i++) {
          total += numbers[i]
      }
      return total;
  }
```