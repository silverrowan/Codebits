---
tags:
  - JavaScript
  - data
  - data-type
  - number
  - UNCLEAR
---
## Number (Data Type)
- Numbers are always *64-bit Floating Point\**
        - \*there *is* the "[[BigInt Data Type]]" for *very very large* numbers, but this is a new addition and not commonly used. It is **not**  the same as the number data type.
- represents *both* integer and floating point (decimal) numbers
- In addition to regular numbers there are "special numeric values"
    - Infinity, -Infinity, and NaN - all belong to the number data type
### +/- Infinity
- Represents the mathematical concept of Infinity
    - can be explicitly referenced, or a result from math that generates the value, eg. dividing by 0
    - can also be returned if a number calculated is larger than the largest number poss w/in number data type
### NaN
- NaN means "Not a Number" (but *is* of the 'number' data type--typeof NaN returns number)
- NaN is a JavaScript reserved word indicating that a number is NOT a legal number.
- when treated as a boolean it resolves to 0 (falsy)
- NaN is "sticky" - further math operations on NaN return NaN.
    - (with one exception: NaN ** 0 = 1)
    - math operations (*on number data?*) will not cause script to "die," NaN is worst result of bad math.
- isNaN() is a global function to determine if a value is not a number
- eg
    - let x = 100 / "apple";
    - isNaN(x); // returns true, x is NaN
### Precision
- floating point is not always 100% accurate
    - eg
    - let x = 0.2 + 0.1; // x = 0.30000000000000004
    - ...to solve the prob above, it helps to multiply and divide (so as to convert to integers and then back to decimal)
    - let x =((0.2 * 10) + (0.1 * 10))/10 //x = 0.3
- Integers (no decimal or exponents) are accurate to 15 digits
    - eg 
    - let x = 999999999999999      //x will be 999'999'999'999'999
    - let y = 9999999999999999   //y will be 10'000'000'000'000'000
- max number of decimals is 17
## Numbers and Strings
- Numbers may be present in [[String Data Type|strings]]! These are **NOT** treated as numbers, but as words!
    - eg let string = "54" //this is a string
         let number = 54 //this is a number
- ***some*** operations attempt to convert number-strings to number-data-type first
    - when converted to number type...
        - null converts to 0
        - undefined converts to NaN
## Alternate Numeric Bases
- By default JavaScript displays numbers in base 10 decimal
- you can use toString() to output numbers in any base from 2 to 36
    - ==Q: Does this mean non-base-10 numbers are of string data type?==
- (Hexadecimal is base 16, Decimal is base 10, Octal is base 8, Binary is base 2)
    - eg.
    - let myNumber = 32;
    - myNumber.toString(36); // returns w
    - myNumber.toString(32); // returns 10
    - myNumber.toString(16); // returns 20
    - myNumber.toString(10); // returns 32
    - myNumber.toString(2);  // returns 100000
        
### Hexadecimal
- JavaScript interprets numeric constants as hexadecimal if preceded by `0x`
    - eg: `let x = 0xFF;` // returns x = 255
### Leading 0
- NEVER write numbers with a leading 0!
- SOME JavaScript versions interpret numbers as octal if written w leading 0
## Numbers as Objects
- Normally js numbers are primitive values from literals
- numbers CAN be defined as [[Object & Symbol Data Types|objects]] with the keyword `new`
    - eg: `let y = new Number(123)`
    - **==THIS IS A BAD IDEA==**
        - it complicates the code and slows down execution AND can produce unexpected results
##  Closely Related: 
- [[Number Methods]]
- [[Number Constructors]]
- [[Basic Operators]]
- [[Comparison Operators]]
- [[Modify & Assign Operators]]
- [[typeof operator]]