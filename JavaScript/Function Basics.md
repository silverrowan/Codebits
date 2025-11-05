******Javascript Function Basics******
**************************************

******Functions******
    a function is a (often named) reusable block of code. 
    unnamed functions are called anonymous functions // eg. function () {...}
    ~~~~~~~~~~~~~~~~~~~~
        eg. function favAnimal (animal) { // this declares the expression, sets its name & parameters, and will containg the function code
                return animal + "is my fav!"; // the function code
            };
            let message = favAnimal ('goat'); //calling the function, and storing the return of function in variable message
            //alternative way to use the function vs above let message....
            console.log(favAnimal('goat')); //calls the function, but shows a message in the console AND DOESNT STORE IN A VARIABLE
    ~~~~~~~~~~~~~~~~~~~~
        Syntax: function name(parameter1, para2, para3 = defaultValue) {
                    //code it does
                }
    ~~~~~~~~~~~~~~~~~~~~

    ******Invoke a Function******
        creating a function does NOT RUN it! To do that, you have to invoke/call the function elsewhere in the code. 
            functions can be "called" (used) on its own or inside another function.
        you need to DO something with the return value.
            --in the above example, stored as a variable, or used as a console log message 
            --if neither was done the function result would return the String... to nowhere
        to call a function, type functionName(parameter1, parameter2, ...) where you want to use it
            OR
    *******Expression VS Declaration******
        A function declaration is declared as a separate statement, and is acccessible in the Main code flow (scope)
            declarations are 'hoisted'
            declared functions CAN be called earlier than defined!
        A function expression is defined within a code block -- inside an expression or other construct. 
            Only useable at that moment. Cannot be called before defined.
            expressed functions are accessible anywhere in that block, BUT NOT outside it (local scope)
                eg. let var = function name (parameter1, para2, para3 = defaultValue)  {
                        //code it does, eg.
                        return expression;
                    };
******Parameter******
    Paramenters are the items listed between the function brackets.
    Paramenters are a placeholder for data that will be passed into the function.
        in the example, 'animal' is the parameter
    Not all functions have paramenters declared, and some have parameters that are optional. (In which case have a default value set)
    ******Create Optional Parameters******
        To create a function with optional paramenters, specify a default value with '='
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~
            eg. function favAnimal (animal = 'Cat') {
                ...
            };
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~
            This parameter will use the default value of cat if called without another argument.
                (eg. 'favAmimal()' is equiv to 'favAnimal('Cat')', but can be replaced w "favAnimal('anything else')")

******Arguments******
    The values that are passed into the function
        in example, 'goat' is the argument (in the parameter section, cat is the default argument)

******Function vs Method******
        a Method is a function that is part of an Object.


******Arrow Functions******
    arrow functions are a specific form of anonymous function expression
        (often used in event listeners)
    Simpler visually, but mostly the same as a simple expressed funtion.
        there ARE some subtle differences btwn arrow and normal functions (will be relevant later)
    //Arrow functions: no bindings to this, arguments, or super, dont use as methods. Cannot be constructors
    instead of the standard function form:
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        function functionName(parameter) {
            return parameter * 2;
        }, 
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    can write: 
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        (parameter) => {
            return parameter * 2;
        };
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        IF the function only takes 1 paramenter, can omit the brackets
            parameter => {...}
        IF the function only contains one line that is a return statement, can omit curly braces and return keyword
            parameter => retValue;
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        function functionName(parameter) {
            return parameter * 2;
        };
    AND
        (parameter) => {return parameter * 2;};
    AND 
        parameter => parameter * 2;
    ARE ALL EQUIVALENT
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~

        eg2:
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~
            a => a + 100 
            //is equiv to:
            function (a) {
                return a + 100;
            };
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~  
        eg. 3
            let var = (parameter1, para2,..., paraN) => expression; 
            
    *******Valid Arrow Function Syntax options******
        () => expression
        param => expression
        (param) => expression
        (param1, param2) => expression
        //if expression is curlybracket statements--THEN INCLUDE return keyword. 
        // omit brackets only if directly returns an just an expression
        () => {statements}
        param => {statements}
        (param1, param2) => {statements}    

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
