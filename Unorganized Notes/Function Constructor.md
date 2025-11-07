***Seems to be generally poor code*** as it has: security & performance issues, and uses global scope only.

```js title:"Syntax eg."
let variableName = new Function("a", "b", "return a + b");
    //note closing ''

OR any of: //(these obv dont assign it to a variable)
new Function(functionBody);
new Function(arg1, functionBody);
new Function(arg1, arg2,...,argN, functionBody);
Function(functionBody);
Function(arg1, functionBody);
Function(arg1, arg2,...,argN, functionBody);
//with or without 'new' the call creates a new function instance

Valid values for parameters (argN...):
"x", "theValue = 42", "[a,b]" /*numbers*/
"x", theValue = 42, [a, b] /* numbers */
//as parameters are parsed the same as function expression, whitespace & comments are accepted!
```
- calling the function constructor can create functions dynamically **BUT**
    - suffers from ***security & performance issues*** similar to `eval()`
        - performance issues are lesser than `eval()`'s
    - creates functions that execute in the [[Function Scope |Global Scope]] **ONLY**