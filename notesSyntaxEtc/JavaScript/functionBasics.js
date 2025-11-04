******Javascript Function Basics******
**************************************

******Definitions******
        
    ******Function******
        a function is a (named) reusable block of code. 
            functions dont actually *need* to be named... these are called anonymous functions
                eg. function () {...}
                // correct this, not entirely right, i dont think: note this form is called function expression not declaration and is not hoisted
        a 'packet' of JavaScript code designed to be reused
        can be "called" (used) on its own or inside another function.
        eg. function favAnimal (animal) {
            return animal + "is my fav!"; 
            }
            let message = favAnimal ('goat') //stores return of function in variable message
            //alternative to let message....
            console.log(favAnimal('goat')); //shows a message in the console BUT DOESNT STORE IN A VARIABLE
        you need to DO something with the return value--in the above example, store as a variable, or 
            create a console log - if neither was done the function result would return the String... to nowhere
        functions may or may not have parameters declared.
        ******Invoke a Function******
            creating a function doesn't actually run it! To do that, you have to invoke/call
                the function elsewhere in the code. 
                to do so, type functionName(parameter1, parameter2, ...)
                OR

    ******Parameter******
        The items listed between the function brackets.
        This is a placeholder for data that will be passed into the function.
            in the example, 'animal' is the parameter
        Not all functions have paramenters, and some have parameters that are optional. (In which case tends to have a default)
        ******Create Optional Parameters******
            to create a function with optional paramenters, specify a default value with '='
                eg. function favAnimal (animal = 'Cat') {
                    ...
                };
                This parameter will use the default value of cat if called without another argument.
                    (eg. favAmimal() is equiv to favAnimal('Cat'), but can be replaced w favAnimal('anything else'))

    ******Arguments******
        The values that are passed into the function
            in example, 'goat' is the argument
    
    ******Function vs Method******
            a Method is a function that is part of an Object.


******Arrow Functions******
    arrow functions are a specific form of anonymous function
        (often used in event listeners)
    there ARE some subtle differences btwn arrow and normal functions
                
    instead of standard form: 
        function functionName(parameter) {
            return parameter * 2;
        }, 
    can write: 
        (parameter) => {
            return parameter * 2;
        };
        IF the function only takes 1 paramenter, can omit the brackets
            parameter => {...}
        IF the function only contains one line that is a return statement, can omit curly braces and return keyword
            parameter => retValue;

        function functionName(parameter) {
            return parameter * 2;
        };
        AND
        (parameter) => {return parameter * 2;};
        AND 
        parameter => parameter * 2;
        ARE ALL EQUIVALENT

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

******Function Scope******
    ******What is Scope******
        when a function is created, the variables etc defined inside it are in their
            own separate compartment inside the function - they can't be targeted/reached
            by code outside the function.
        NOTE: the same scope rules DO NOT apply to loop and conditional blocks, 
            JUST functions -- even though they look very similar.
    
    ******Global Scope******
        The top-level, outside all functions.
        Values defined here are accessible from everywhere in the code.

    ******Why silo variables etc******
        primarily for security and organization
        this allows you to call in external scripts that may be using the same variable names 
            without them messing with your script variables of the same name.
        If calling multiple external script files into the same documennt
            and they use the same glovbal variable names an error will stop the second one from loading
            if they use the same global function names, the second function will overwrite (re-declare) the first version of the function
                Keeping this script locked away in functions prevents this problem
