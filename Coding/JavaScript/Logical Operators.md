---
tags:
  - JavaScript
  - boolean
  - operator
alias: Logical Operators - OR AND & NOT
cssclasses:
"type:":
---

# Logical Operators
**UNLIKE** classical programming, JavaScript Logicals **DONT** return T/F only
- **IF** an operand is **NOT** a #boolean it's converted to a boolean for the evaluation
    - 1 -> true, 0 -> false
    - Falsy: NUMBER 0, empty string '', null, undefined, and NaN
    -  Truthy: everything else.

When a value is returned, it is in the ORIGINAL, PRE-Boolean-Conversion value

Precedence order of Logicals: !, &&, || *(or 'order of operations')*
- eg. `a && b || c && d`  is the same as `(a && b) || (c && d)`  ^cc8dd5
### Definitions
  **Falsy**: Roughly equivalent to 'false' includes: false, NUMBER 0, empty string '', null, undefined, and NaN
   **Truthy**: Roughly equivalent to 'true' includes: true, everything else not falsy.
## Operators
### || OR
- Finds **FIRST "truthy"** value, or LAST value if all false
    - also called "short circuit" evaluation - because evals until truthy, then ignores the remaining
    - eg`true || alert("not printed"); //eval stops upon seeing the "true", alert doesnt run`
     - `false || alert("printed"); //eval returns last value as all false, alert runs`
### && AND******
Finds **FIRST "falsy"** value, or LAST value if all true
`alert( 1 && 2 && null && 3 ); //null is returned`
`alert( 1 && 2 && 3 ); // 3 is returned`
Sometimes used as a shorter way of writing "if"
- While the && variant appears shorter, "if" is more obvious and tends to be more readable
    - Recomended to NOT use `&&` when `if` would be appropriate.
```js
let x = 1;
(x > 0) && alert( 'Greater than zero!' );
    //the alert would only evaluate if (x>0) is true, so it an analog for:
let x = 1;
if (x > 0) alert('Greater than zero!');
```
### ! NOT******
syntax: result = !value;
the ! operator accepts a single argument and converts the operand to boolean `true/false` and returns the inverse *boolean* value
- eg. `alert( !true ) //ret false`
    - `alert( !0 ) //ret true`
!! NOT NOT can be used to convert to boolean
- eg. `alert( !!"non-empty string" ); //ret true`
- or you could use the built-in function Boolean(value)
    - eg. `alert( Boolean( "non-empty string" ) ); //ret true`
### ?? Nullish coalescing
^60b689
- ?? #Nullish coalescing is better than using `|| OR`  when **most** falsy values (eg. 0) should be considered 'normal', not 'false'
    - `undefined` and `null` will return `false`
    - 0, etc will return their values.

RELATED: [[JS-Logical Assignment Operators]]