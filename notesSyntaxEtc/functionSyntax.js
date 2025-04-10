//common functions I'm using a lot

//Conditional
if (condition) { //condition evals to truthy or falsy; can even be just a variable, 
    //code;
} else if (condition) {
    //code
} else {
    //code
}

switch (x) {
    case value1: //equiv of if (x === value1)
        //code
    break;

    case 2: //runs case 3 as well b/c no break!
    case 3:
        //code
    break; 

    //etc

    default:
        //code
    break;
}

let result = condition ? (result)value/functionIfTrue() : value/functionIfFalse();
let result = condition
    ? value/functionIfTrue //note: NO ";" here
    : value/functionIfFalse;
let result = condition ? valueIfTrue : newCondition ? valueifNewTrue : newerCondition ? valueIfNewerTrue : valueNothingTrue
let result = condition ? valueIfTrue : 
    newCondition ? valueifNewTrue : // basically nested if statments: if x then y else if z...
    newerCondition ? valueIfNewerTrue : 
    valueNothingTrue;

//Arrow functions: no bindings to this, arguments, or super, dont use as methods. Cannot be constructors
a => a + 100 
//is equiv to:
    function (a) {
        return a + 100
    }
//    valid syntax options:
        () => expression
        param => expression
        (param) => expression
        (param1, param2) => expression
            //expression can also be curlybracket statements--THEN INCLUDE return keyword. omit brackets only if directly returns an expression
        () => {statements}
        param => {statements}
        (param1, param2) => {statements}    

//Function Declaration - declared as separate statement, accessible in Main code flow. CAN BE CALLED EARLIER THAN DEFINED!
//when w/in a code block is vis everywhere in that block, BUT NOT outside it.
function name(parameter1, para2, para3 = defaultValue) {
    //code it does
}
//Function Expression - declared inside the expression or other construct. Only useable at that moment. cannot be called before defined.
let var = function name (parameter1, para2, para3 = defaultValue)  {
    //code it does, eg.
    return expression;
};
//Arrow Functions (a form of function EXPRESSION) somewhat simpler, but also a few differences, relevant later.
let var = (parameter1, para2,..., paraN) => expression; //equiv to funct expression above.





