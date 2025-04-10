Javascript
    Basic
        + addition (& concatination & convert to num)
        - subtraction
        * multiplication
        / division
        ** exponential
        % remainder (modulus/modulo)
        ++ increment up (var++ shows before increase, then increments. ++var increments then shows/assigns/etc variable )
        -- decrement

    Assignment
        = basic x is this
        += x += y is shortcut for x = x + y CAN ALSO BE USED TO CONCATINATE
        -= x -= y is shortcut for x = x - y
        *= x *= y is shortcut for x = x * y
        /= x /= y is shortcut for x = x / y

    Comparison (These return true/false, strings are compared alphabetically, like a book--lowercase has greater value that corresponding capital letter)
        === strict equality
        !== strict non-equality
        < less than
        > greater than
        <= less than or equal to
        >= greater than or equal to
        (== and != are the non-strict versions of === & !==, which will convert between data-types & can cause more erros)
            (null==undefined & *no other values*, but are not === (diff datatypes))
            (null->0, undefined->NaN for comparisons, but not for ==)
            
    Logical
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

    Variable declaration
        let - modern Variable declaration
        const - modern constant declaration (cant change value)
        var - OUTDATED variable declaration
    "Special Values"
        Infinity, -Infinity: self explanitory, numeric
        NaN: not a number - boolean resolves to 0, surprisingly, numeric
        null: is of its own data type! Means nothing/empty/unknown-->but type of defines as object due to error
        undefined: another of its own data type. means value not assigned.
        typeof x: a operator tells you the datatype

why VS code doesnt include Array Methods in the autocomplete list?increments
