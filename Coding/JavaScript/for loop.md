---
tags:
  - JavaScript
  - loop
  - for-loop
---
## for loop

```js title:"for loop"
for (let i = 0; i < 100; i++) {
    //code to loop;
    //NO NEED to step counter variable, as it is in the initializing statement
}
```
## Standard "for" loop
```js title:"for loop syntax"
for (initializer/counter variable; condition (form: runs while); step/final expression) {
    //code to run
}
```
-  initializer: is also called the counter variable (eg. i = 0 cats)
-  condition: runs when returns positive (so, run loop while condition is met; eg. i<10)
- final expression: usually how to modify the initializer to bring it closer to closing the condition (eg. i++) This runs *after* each iteration of the loop, as a separate statement.
    - effectively:
    ```js 
    let i = 0 /*initializer*/ ; 
    if (i < 10 /*condition*/) {
    /*run the code*/;
    i++ /*//final expression*/;
    }
    REPEAT until stops. --> this part cant be done without a loop form.
    ```