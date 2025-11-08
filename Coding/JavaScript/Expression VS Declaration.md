---
tags:
  - JavaScript
  - function
  - UNCLEAR
---
### Expression VS Declaration
- A function declaration is declared as a ***separate statement, in the Main code flow (scope).***
    - declarations are #hoisted
    - declared functions CAN be called earlier than defined!
    - in strict mode, when a Function Declaration is within a code block, its visible everywhere in that code block, but NOT outside it.
- A function expression is created ***inside an expression or other syntax construct***. 
    - function expression are only created when the execution reaches it, and can be used after that. ==what but I thought they had to be in the code block....==
    - Only useable at that moment. ==Cannot be called before defined.==
    - Expressed functions are ==accessible anywhere in that block==, BUT NOT outside it (local scope) 
        - ==the highlighted notes conflict. Which is true?==
    - Expressed functions do not need a name
### When to use Declaration or Expression
- In general, when we need to create a function, the first consideration is to declare the function.
    - it gives more freedom to how to organize the code
    - its better for readability as its easier to look up `function f(...) {...}` than `let f = function(...) {...};`
        - Declarations are more 'eye catching'
- BUT if a function declaration does not suit for some reason, OR we need a conditional declaration, then Function Expression should be used.