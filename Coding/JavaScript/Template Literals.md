---
tags:
  - JavaScript
  - string
  - data
---
## Template Literals
Back-ticked strings are called 'template literals' and have some special properties
- They can be declared over multiple lines
```js
let newline = `One day you finally knew 
what you had to do and began`;
	//returns string INCLUDING line break
	//in a normal string would need to include characters '\n' for a line break
```
- They can have JavaScript embedded in them.
	wrap the JavaScript inside: ${ } and the result will be incl. in the string
```js
 let userName = "chris";
	let greeting = `hello, ${userName}`; //returns hello, chris
	let userLastName = "smith";
	let greeting2 = `hello, ${userName} ${userLastName}`;
		//returns hello, chris smith
		//note the concatination WITHOUT using the '+' operator!
	let mathString = `total = ${ 3 + 4 }` //returns total = 7
	```