---
tags:
  - JavaScript
  - assignment
  - operator
  - UNCLEAR
---
## Assignment
`=` is the basic 'x is this' / assigns values. 
### *Modify* and assign type operators  
a modify and assign operator exists for all arithmetic and bitwise operators
these have the SAME precedence as "=" and so run after most other calculations
eg. `n *= 3 + 5` is the same as `n *= 8` **NOT** `n * 3 + 5 

- **`+=`** add then assign: 
    - `x += y` is shortcut for `x = x + y`
    - like regular `+` CAN ALSO BE USED TO CONCATENATE
    eg
        `n = 2;
        `n = n + 5;` 
        // can be written as: `n += 5;
- `-=` subtract then assign:
    -  `x -= y` is shortcut for `x = x - y`
- `*=` multiply then assign
    - `x *= y` is shortcut for `x = x * y`
- `/=` divide then assign
    - `x /= y` is shortcut for `x = x / y`
etc. 
    
- `...`  splits iterables into individual elements 
    - ==*I'm not sure that is meant by this, or how, tbh.==
  