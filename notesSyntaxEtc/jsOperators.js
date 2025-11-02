******Javascript Operators******
********************************

******Terms******
    Operand = what operators are applied to (the number). also called arguments.
    Unary = an operator is unary if it has only operand.
        eg. -x (- is the operator, x is the operand)
    Binary = an operator is binary if it has two operands
        eg. y * x (y & x are operands, * is operator)

******Basic Math******
    In JavaScript ALL operators will return a value!
    Normal math order of operations applies*
        *unary operator precedence is higher than exponents (goes first)
    JavaScript will attempt to convert strings to numbers in numeric operations
    WITH THE EXCEPTION of (Binary) ADDITION (as used for concatination as well)
        + addition (& concatination & convert to num)
        - subtraction
            when using + or - as a unary operator, convention to have no space btwen operator and operand
            eg in use: alert( +numStringVar1 + +numStringVar2 );
        * multiplication
        / division
        ** exponential
        % remainder (modulus/modulo)
        ++ increment up (var++ shows before increase, then increments. ++var increments then shows/assigns/etc variable )
        -- decrement
            increment and decrement operators can only be attached to variables, as it includes 
                re-assigning the variable value.
            Postfix form: When applied after the variable (numberVariable++)
            prefix form: When applied before the variable (++numberVariable) 
                BOTH increase the value by 1.
                The difference only matters if we SEE or USE the RETURNED VALUE
                    prefix form returns the NEW value; postfix returns the OLD value
                    eg. let counter = 1;
                        let a = ++counter;
                        alert(a); // alert shows 2
                      BUT //replace last two lines as below
                        let a = counter++;
                        alert(a); //alert would show 1!

                        let counter = 1;
                  (*)   alert ( counter++ ) // alert shows 1, and value of counter has increased to 2
                                    //BUT if (*) line replaced as below....
                        counter++;
                        alert( counter ); //SHOWS 2! its a different line, we're not actually using
                                          //the ++ returned value like we are for prev example
        = is also an operator! with lowest precedence (last)
            therefore eg. x = value Writes value into x *and then returns it!*
        , comma: rarely used operator. Even lower precidence than "="
                allows for evaluation of several expressions, with only the result of the last one returned. O_o
                whaaaat. even with the example this makes little sense to me.

        ******Adding Numbers and Strings******
            WARNING: JavaScript uses "+" for BOTH addition AND concatination!
            Numbers are added, Strings are concatenated.
                NOTE: JavaScript interpreter works left to right!
            Common Mistakes:
                let x= 10; 
                let y = 20;
                let z = "The result is: " + x + y;
                    // common mistake to expect z=the result is 30.
                    // BECAUSE z is a string from "the result is", it becomes
                    // z = the result is: 1020
                let x = 10;
                let y = 20;
                let z = "30"; //note STRING type!
                let result = x + y + z;
                    //common mistake to expect result = 102030
                    //BECAUSE interpreter works left to right x & y are 
                    //added BEFORE the string z, so it is: result = 3030
            

******Assignment******
        = basic x is this / assigns values. 

    ***Modify and assign type operators***  
    a modify and assign operator exists for all arithmetic and bitwise operators
    these have the SAME precedence as "=" and so run after most other calculations
        eg.
            n *= 3 + 5 is the same as n *= 8 *NOT* n * 3 + 5  
        += 
            add then assign: x += y is shortcut for x = x + y 
            CAN ALSO BE USED TO CONCATINATE
            eg: n = 2;
                n = n + 5; // can be written as: n += 5;
        -= 
            x -= y is shortcut for x = x - y
        *= 
            x *= y is shortcut for x = x * y
        /= x 
            /= y is shortcut for x = x / y
        etc. 
            
        ...
            splits iterables into individual elements
          
******Logical******
        JS Logicals || & && DONT return T/F DX
        || OR - classic prog manipulates boolean only, in JS more complicated/powerful, & converts nums/strings to boolean
            -finds FIRST "truthy" value, 
            or LAST value if all false, and
            returns NON-CONVERTED value.
                can be used as a short-circuit b/c ignores everything after first True
        && AND classic prog: true if both true, else false
            -finds FIRST "falsy" value, or last value if all true.
            -essentially the mirror of OR
            AND && has higher precedence than OR || (returns value not t/f to this order!)
        ! NOT converts to boolean and returns inverse value
            (!! NOT NOT can be used to convert to boolean)
            NOT ! has highest precedence of logical operators
        ?? Nullish coalescing
        Falsy: NUMBER 0, empty string '', null, undefined, and NaN
        Truthy: everything else.

******Logical Assignment******
        &&=
            AND assignment: if the first value is true, assign the second value. 
            eg
                let x = true;
                let y = x &&= 10; 
                    {/* --> y=10 */}
            eg
                let x = false;
                let y = x &&= 10; 
                    {/* --> y=false */}                
        ||=
            OR assignment: if the first value is false, assign the second value
            eg 
                let x = false;
                let y = x ||= 10;
                {/* --> y=10 */}
            eg 
                let x = true;
                let y = x ||= 10;
                {/* --> y=true */}
        ??=
            Nullish coalescing assignment: if first value is undefined or null, assign the second value
            eg
                let x;
                x ??= 10; 
                    {/* --> x=10 ----- originally x is undefined  */}
            eg
                let x = 0;
                x ??= 10;
                    {/* --> x=0 ------ originally x is 0, which is a defined, NON null value */}

******Comparison******
    (These return true/false, strings are compared alphabetically, like a book--lowercase has greater value than corresponding capital letter)
        === strict equality (value AND type)
        !== strict non-equality
            usually better to use the strict types as they tend to result in fewer errors.
        < less than
        > greater than
        <= less than or equal to
        >= greater than or equal to
        (== and != are the non-strict versions of === & !==, which will convert between data-types & can cause more erros)
            (null==undefined & *no other values*, but are not === (diff datatypes))
            (null->0, undefined->NaN for comparisons, but not for ==)


******Bitwise Operators******
    these treat arguments as 32-bit integer number and work on the level of their binary representation //what does this mean?
    these are NOT JavaScript specific, and are supported in most programming languages
    they're used rarely. Web dev. has little use for them, some special areas do use them.
        AND (&)
        OR (|)
        XOR (^)
        NOT(~)
        LEFT SHIFT (<<)
        RIGHT SHIFT (>>)
        ZERO-FILL RIGHT SHIFT (>>>)



{/* What is this note referencing?
why VS code doesnt include Array Methods in the autocomplete list?increments */}