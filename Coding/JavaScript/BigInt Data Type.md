---
tags:
  - JavaScript
  - data
  - data-type
  - number
---
### BigInt
- for numbers that exceed the limits of JavaScript [[Number Data Type]]
    - integer values > (2**53 - 1) or < -(2**53 - 1)
    - (*technically* the number type can store these numbers, but there will be precision errors as approx values will be stored)
- BigInt is a relatively new addition to JavaScript.
- BigInt is used to represent integers of arbitrary length
- a BigInt value is created by adding n to the end of an integer
    - eg. `const bigInt = 1234567890123456789012345678901234567890n;`