---
tags:
  - JavaScript
  - boolean
  - assignment
  - operator
  - nullish
---
## Logical Assignment
&&=  AND assignment: if the first value is true, assign the second value. 
```js
eg
    let x = true;
    let y = x &&= 10; 
        {/* --> y=10 \*/}
eg
    let x = false;
    let y = x &&= 10; 
        {/* --> y=false */}
```
||=   OR assignment: if the first value is false, assign the second value
```js
eg 
    let x = false;
    let y = x ||= 10;
    {/* --> y=10 */}
eg 
    let x = true;
    let y = x ||= 10;
    {/* --> y=true */}
```
??=	Nullish coalescing assignment: if first value is undefined or null, assign the second value
```js
eg
    let x;
    x ??= 10; 
        {/* --> x=10 ----- originally x is undefined  */}
eg
    let x = 0;
    x ??= 10;
        {/* --> x=0 ------ originally x is 0, which is a defined, NON null value */}
```