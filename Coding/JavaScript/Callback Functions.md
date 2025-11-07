- passing functions into another function as values, and using function expressions (I presume, was not explicitly defined that this was the case)
```js title:"Callback eg."
function as(question, yes, no) { //the function asks 'question' and depending on response runs yes() or no()
    if (confirm(question)) yes()
    else no(); //note only the ; here - if... is one statement
} 
//***(see below for alternate way of coding)

function showOk() {
    alert( "you agreed" );
}

function showCancel() {
    alert( "you canceled the execution" );
}

//useage: functions showOK, showCancel are passed to:
ask( "Do you agree?", showOK, showCancel);
```

- question: text of question
- yes: function to run if the asnwer is 'yes'
- no: function to run if the answer is 'no'
- note that `yes` and `no` are parameters in the function `ask(...)`
    - the paramenter `value` of these is the text making their code.
    - but that `yes()` and `no()` are functions expressed in the function `ask(...)`
- The arguements `showOK` and `showCancel` of `ask` are called *[[Unorganized Notes/Callback Functions |callback functions or callbacks]]*

after the *** this could also be written shorter, as:
```js 
ask (
    "Do you agree?", 
    function() { alert("You agreed"); },
    function() { alert( "you canceled the execution" );
);
```
- here the functions are declared inside the ask(...) call. 
    - they have no name and are thus 'anonymous'
    - they are not accessible outside of `ask()`