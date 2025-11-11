---
tags:
  - JavaScript
  - conditional
  - function
---
## if...else
```js
if (condition) {
	//code to run if condition true
} else {
	//code to run otherwise
}
```
- `if {...}` will work without the `else {...}` block - just wont run something on false
- as anything not falsy returns `true`, can use just a variable name to return true if it has a value. 
	eg `if(cheese) {alert("have cheese");} else {alert("no cheese :(");}`

### if...else if...else
```js
if (condition) {
	//code to run on condition is true
} else if (condition2) {
	//code to run if condition2 is true
} else if (condition3) {
	//and so on
} else {
	//code to run if none of prev conditions were true
}
```

## Switch Statements
Use over if...else when conditions are simple AND there are many choices
Uses STRICT equality, so data type matters!
Switch statements take a single expression or value as input and then
	look  through a series of choices until they find one that matches the value, the execute the code within it. 
	At the 'break' keyword it exits the switch statement and continues w/ the code below the switch statement.
	the 'default' case runs if none of the prev cases matched the condition,
		this may be safely omitted if no chance the expression could be an unknown value.
	Both 'switch' & 'case' allow use of expressions
```js
eg. let a = 1;
let b = 0;

switch (a) {
	case b + 1 :
		this runs! because a === b + 1;
	break;
	...
}

switch (expression) {
    case value1: //equiv of 'if (expression === value1) {...}'
        //code
    break;

    case value2: //runs case 3 as well b/c no break! "grouped" with case value3
    case value3:
        //code
    break; 

    //etc

    default:
        //code
    break;
}
```
## Ternary Operator
also called conditional/question mark Operator ( '?' )
	(the only operator in Javascript with 3 operands!)
used to #test a condition and return one value if true, or another if false
	takes less space than if...else
	best used when relatively simple
		Best for setting variable values, but can also run functions, or any other line of code.
occasionally `?` used to replace `if()...`
	NOT RECOMENDED TO USE THIS WAY
	`?` BEST FOR returning one value or another based on condition, not running code
```js
(condition) ? when right : when wrong;
/EQUIV TO
if (condition) {
	when right;
} else {
	when wrong;
}
```

### One Line
```js
(let result = ) condition ? run & return this if true : run & return this if false;
eg. const greeting = isBirthday ? "Happy Birthday!" : "Good Morning";
```

### Multiple Lines
```js

condition //note: NO ";" here
	? run this if true //note: NO ";" here
	: run this if false;

eg. const greeting = isBirthday
		? "Happy Birthday!"
		: "Good Morning";
```
### Nesting
```js nowrap
let result = condition ? valueIfTrue : newCondition ? valueifNewTrue : newerCondition ? valueIfNewerTrue : valueNothingTrue
let result = condition ? valueIfTrue : 
	newCondition ? valueifNewTrue : // basically nested if statments: if x then y else if z...
	newerCondition ? valueIfNewerTrue : 
	valueNothingTrue;
	```