---
tags:
  - JavaScript
  - data
  - data-type
  - object
  - symbol
---
### Objects & Symbols
- Objects are a non-primative datatype in JS. 
    - all other types are '*primitive*' - their values can only be a single thing.
    - in contrast, objects store *keyed* collections of data/complex entities
- objects (can) contain lists of *properties* - or a key: value pair.
    - Key is a string, value can be anything
- The 'symbol' type is used to create unique identifiers for objects.
- Objects only store the contents in *pairs,* the key, and the value.
    - they do NOT allow for management of the *order* of elements
        - to store ordered collections, look to [[Arrays]] (a special object)
## CREATE OBJECT
- two syntax forms to create a new object: *"object constructor"* and *"object literal"*
    - OBJECT CONSTRUCTOR syntax
        - `let newObject1 = new Object();
    - OBJECT LITERAL syntax
        - `let newObject2 = {}; 
- can also immediately input properties when creating object 
    - ==DOES THIS WORK W CONSTRUCTOR? I ASSUME IT DOES BUT CHECK==
```js title:"object literal with properties""
let userExample = { //the object 
    name: "John",   //property 1: key = name, value = "John"
    age: 30         //property 2: key = age, value = 30
    "likes birds": true, //MULTIWORD property names (keys) must be quoted
};
```
- NOTE: *comma* after property, not usual semicolon UNTIL object is closed.
- last property ending in a comma (trailing, or hanging comma) makes
- altering--add/remove/move properties easier b/c all are alike
## READ, ADD, & DELETE PROPERTIES
- again, two syntax forms! *"Dot notation"* and *"square bracket notation"*
```js title:"Dot Notation eg."
alert( userExample.name);   //returns John
alert( userExample.age);    //returns 30
userExample.isAdmin = true;     //adds property "isAdmin"
delete userExample.age;         //removes property "age"
```

```js title:"Square Bracket Notation eg."
userExample["likes birds"] = true; //setting property
alert(userExample["likes birds"]); //getting property; value = true
delete userExample["likes birds"]; //delete property
```
### DOT vs [ ] NOTATION USE LIMITS
- Multiword property names DONT WORK with Dot access! Use Square bracket notation with quotes
    - eg `let userExample = {};
         `userExample["likes birds"] = true; //setting property
- \[ ] notation can be used to access values of *variable* property names, eg:
    ```js title:"[ ] notation access values eg"
let key = "likes birds";
user[key] = true;
//same as user["likes birds"] = true; 
//kinda useless like this, but used like below....

let user = { name: "john", age: 30,};
let key = prompt("what do you want to know about the user?", "name");
    //access by variable
    alert( user[key] ); // John, if entered "name"
    //dot notation CANNOT be used the same way!
    alert(user.key) //returns undefined
    ```
## COMPUTED PROPERTIES
- using [ ] in an obj literal when creating an object.
```js title:eg
let fruit = prompt("Which fruit to buy", "apple");
let bag = {
    [fruit]:5 //the name of the property is taken from the variable fruit--in this case, apple
};
alert( bag.apple ); //5 if fruit = apple

//essentially the same as (but better looking?):
let fruit = prompt("which fruit to buy", "apple");
let bag = {};
//take property name from fruit variable
bag[fruit] = 5;
```
 
 - more complex expressions can also be used in [ ]
```js 
let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 //becomes bag.appleComputers = 5
};
```
## PROPERTY VALUE SHORTHAND
%% what is going on here, how is it clear that the variable is the value and not the name? %%
```js
//using existing variable as value for property names is v common so has a shorthand
//eg
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        //etc
    };
}

let user = makeUser("John", 30);
alert(user.name); //returns John

//can also be written as:
function makeUser(name, age) {
    return {
        name,   //same as name: name
        age,    //same as age: age
    }
}
//can use a mix of normal properties and shorthand in the same obj:
function makeUser(name, age) {
    return {
        name,   //same as name: name
        age: 30
    };
}
```
## PROPERTY NAMES
- object property names can be ANY string* non-string types will be converted to string
    - the restriction on variable names to avoid language reserved words DOES NOT APPLY to property names!
    - *exception is the property named __proto__ which cannot be set to a non-object value
## PROPERTY EXISTS TEST
- it is possible to access a property that DOES NOT EXIST - it will return "undefined"
- to test if property exists, use special operator "in"
    - syntax: `"key" in object`
```js title:"eg"
let user = { name: "John", age:30 };

alert( "age" in user );     //returns true, user.age exists
alert( "blabla" in user );  //returns false, user.blabla doesnt exist
    //NOTE: left side of "in" must be a PROPERTY NAME, usually a quoted string. if no quotes
    //  then it means a variable contains the string to test for
    //eg
    let user = { age: 30, };
    let key = "age";
    alert( key in user ); //true, property "age" exists

//why use "in" instead of comapring to undefined:
    //because the property could exist, but store the value undefined
    //(even if it *shouldn't* by convention, null should be used for unkown or empty values)
```
## LOOP OVER ALL PROPERTIES OF AN OBJ
- a special form of the for...in loop (different from for(;;) construct)
```js title:"syntax"
for (key in object) {
    executes body for EACH key among the object properties
}
```

```js title:eg
//to output all properties of user:
let user = { name: "John", age: 30, isAdmin: true, };
for (let key in user) {
    alert( key ); // keys: name, age, isAdmin
    alert( user[key] ); // values of keys: John, 30, true
}     alert(userExample["likes birds"]); //getting property; value = true
delete userExample["likes birds"]; //delete property
    //note that all "for" constructs allow to declare teh looping variable inside the look like let key in eg.
        // for (let prop in obj) is also widely used
``` 
### LOOP ORDER   
- Integer properties are sorted numerically
    - an integer property is one that can be converted to an integer number and back to a string remains the same - so "49" is an integer property but "+49" and "1.2" are not
- others appear in order created
```js title:eg
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    //...,
    "1": "USA",
};

for (let code in codes) {
    alert(code); // returns: 1, 41, 44, 49 - ! 
}
```

```js title:"eg sort order entered"
// to make codes return in order entered must make them non-integer, 
// so can "cheat" by adding a "+" before ea number is enough.
//eg
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    //...,
    "+1": "USA",
};

for (let code in codes) {
    alert(code); // returns: 49, 41, 44, 1 
}
```