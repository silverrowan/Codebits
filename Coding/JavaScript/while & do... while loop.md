---
tags:
  - JavaScript
  - loop
  - while-loop
---
## while
- syntax only demands the condition, but the initializer and step must also be present! 
```js title:"while loop"
let i = 0; // BEFORE loop
while (i < 10) {
    //do code;
    i++; //or other stepping formula IN loop, somewhere
}
```
 - otherwise similar to a for loop in function.
### do... while
- this one behaves a little different!
    - the code that makes up the loop will always execute once, even if the condition is not met! (because the condition shows up after its already run once)
    ```js "do...while loop"
    let i = 0;
    do {
        //do code;
        i++ //or other per abv ex
        } while (i < 10) //while (condition) 
    ```

