********************************
## Terms
**Operand** = what operators are applied to (the number). also called arguments.
**Unary** = an operator is unary if it has only operand.
	eg. `-x (- is the operator, x is the operand)
**Binary** = an operator is binary if it has two operands
	eg. `y * x (y & x are operands, * is operator)

## Basic Math
In JavaScript ALL operators will return a value!
Normal math order of operations applies*
- \* unary operator precedence is higher than exponents (goes first)
- \* logical operations also have their own precedence 
JavaScript will attempt to convert strings to numbers in numeric operations **WITH THE EXCEPTION of** (Binary) ADDITION (as used for concatination as well)
- `+` addition (& concatination & convert to num)
- `-` subtraction
    - when using `+` or `-` as a unary operator, convention to have no space btwen operator and operand
    - eg in use: `alert( +numStringVar1 + +numStringVar2 );
- `*` multiplication
- `/` division
- `**` exponential
- `%` remainder (modulus/modulo)
- `=` is also an operator! with lowest precedence (last)
    - = is the basic 'x is this' / assigns values.
    - therefore eg. x = value Writes value into x *and then returns it!*
- `,` comma: rarely used operator. Even lower precidence than "="
    - allows for evaluation of several expressions, with only the result of the last one returned. O_o
    - *whaaaat. even with the example this makes little sense to me.
## Increment & Decrement
- increment and decrement operators can only be attached to variables, as it includes re-assigning the variable value.
    - Postfix form: When applied after the variable (numberVariable++)
    - Prefix form: When applied before the variable (++numberVariable) 
        - BOTH increase the value by 1.
        - The difference only matters if we SEE or USE the RETURNED VALUE. Prefix form returns the NEW value; postfix returns the OLD value
- ++ increment up (var++ shows before increase, then increments. ++var increments then shows/assigns/etc variable )
- -- decrement
```js
				eg. let counter = 1;
					let a = ++counter;
					alert(a); // alert shows 2
				  BUT //replace last two lines as below
					let a = counter++;
					alert(a); //alert would show 1!

					let counter = 1;
			  (*)   alert ( counter++ ) // alert shows 1, and value of counter has increased to 2
								//BUT if (*) line replaced as below....
					counter++;
					alert( counter ); //SHOWS 2! its a different line, we're not actually using
									  //the ++ returned value like we are for prev example
```
### Adding Numbers and Strings
==**WARNING:**== JavaScript uses "+" for BOTH addition AND concatenation!
- Numbers are added, Strings are concatenated.
    - *Numbers in strings are treated **AS STRINGS** for addition*
- **NOTE:** JavaScript interpreter works left to right!
#### Common Mistakes:
```js
let x= 10; 
let y = 20;
let z = "The result is: " + x + y;
    // common mistake to expect z=the result is 30.
    // BECAUSE z is a string from "the result is", it becomes
    // z = the result is: 1020
let x = 10;
let y = 20;
let z = "30"; //note STRING type!
let result = x + y + z;
    //common mistake to expect result = 102030
    //BECAUSE interpreter works left to right x & y are 
    //added BEFORE the string z, so it is: result = 3030
```

*******
Related:
[[JS-Modify&Assign Operators]]
[[JS-Logical Operators]]
[[JS-Logical Assignment Operators]]
[[JS-Comparison Operators]]
[[JS-Bitwise Operators]]