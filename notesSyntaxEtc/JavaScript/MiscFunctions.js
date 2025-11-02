******Javascript Other Common Functions******
***************************************

******Arrow Functions******
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





