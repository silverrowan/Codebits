******Javascript Operators******
********************************
    note: occasionally numbers in arithmetic sometimes called operands

******Basic Math******
    Normal math order of operations applies
    JavaScript will attempt to convert strings to numbers in numeric operations
    WITH THE EXCEPTION of ADDITION (as used for concatination as well)
        + addition (& concatination & convert to num)
        - subtraction
        * multiplication
        / division
        ** exponential
        % remainder (modulus/modulo)
        ++ increment up (var++ shows before increase, then increments. ++var increments then shows/assigns/etc variable )
        -- decrement
            increment and decrement operators can only be attached to variables, as it includes 
                re-assigning the variable value.
            theres a bit of other quirkynes w ++ & -- that will be noted later

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
        = basic x is this / assigns values
        += 
            x += y is shortcut for x = x + y CAN ALSO BE USED TO CONCATINATE
        -= 
            x -= y is shortcut for x = x - y
        *= 
            x *= y is shortcut for x = x * y
        /= x 
            /= y is shortcut for x = x / y
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
        < less than
        > greater than
        <= less than or equal to
        >= greater than or equal to
        (== and != are the non-strict versions of === & !==, which will convert between data-types & can cause more erros)
            (null==undefined & *no other values*, but are not === (diff datatypes))
            (null->0, undefined->NaN for comparisons, but not for ==)

{/* What is this note referencing?
why VS code doesnt include Array Methods in the autocomplete list?increments */}