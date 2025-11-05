*********************************
## 8 Basic Types
A value is always of a certain type
there are 8 basic data Types
a variable can hold any data type
	the type of data a variable holds can be changed
		programming langs that allow this are called "dynamically typed"
		(meaning data types exist, but variables are not bount to any of them)
### Number
represents both integer and floating point numbers
there are many operations for numbers
In addition to regular numbers there are "special numeric values"
#### +/- Infinity
Represents the mathmatical concept of Infinity
	can be explicitly referenced, or a result from math that generates the value, eg. dividing by 0
	can also be returned if a number calculated is larger than the largest number poss w/in number data type
Infinity, -Infinity, (and NaN) - all belong to the number data type
#### NaN
NaN means "Not a Number" (but is of the 'number' data type--typeof NaN returns number)
NaN is a JavaScript reserved word indicating that a number is NOT a legal number.
as a boolean it resolves to 0
NaN is "sticky" - further math ops on NaN return NaN.
	(with one exception: NaN ** 0 = 1)
	math ops will not cause script to "die" NaN is worst result of bad math
isNaN() is a global function to determine if a value is not a number
eg
	let x = 100 / "apple";
	isNaN(x); // returns true, x is NaN
### BigInt
for numbers that exceed the limits of JavaScript Number type
	integer values > (2**53 - 1) or < -(2**53 - 1)
	(techhnically it can store these numbers, but there will be precision errors as approx value will be stored)
BigInt is a relatively new addition to JavaScript.
BigInt is used to represent integers of arbitrary length
a BigInt value is created by adding n to the end of an integer
	eg. `const bigInt = 1234567890123456789012345678901234567890n;`
### String
A string must be surrounded by quotes.
	"string", 'string', & `string` are all acceptable
		double ("") & single ('') quotes are simple quotes. practically no difference between them in JS
		backticks are "extended functionality" quotes. 
		backtick `string` can have another string or expression embedded in them
		eg. let str = "hello";
			let str2 = `can embed another ${str}`;
A string may have 0 characters, 1 character, or many characters.
(there is no "character" type, as in some other langs)
### Boolean (logical type)******
Only two values: true and false
commonly used to store yes/no values. true = yes, false = no.
can also be result of comparisons
	eg. let isGreater = 4 > 1;
		alert( isGreater ); //true (the comparison result is 'yes')
### Null
NOT a reference to a non-existing object nor a null pointer
Just a special value that represents nothing/empty/value unkown.
Null is the only value of the null type.
### undefined
Undefined is the only value of the undefined type.
The meaning of undefined is "value not assigned"
	the variable was declared, but not assigned a value.
techhnically it is possilble to explicitly assign undefined to a variable
	but this is not recomended, and instead null should be used to *assign* an empty or unkown value.
	while undefined is reserved as default initial value for unassigned things
### Objects & Symbols
The 'object' type is special
	all other types are 'primitive' - their values can only be a single thing.
	in contrast, objects store *collections* of data and more complex entities.
The 'symbol' type is used to create unique identifiers for objects.

![[JS-typeof operator | no-title]]