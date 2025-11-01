******JavaScript Variables******
********************************

******Variable Declarations******
var - old, depreciated. may see in old codes, has some quirks
const - constants; variables that cannot be changed once set
let - standard variable - can re-assign value
    let a = 3; // make variable a, give it value 3
    a = 5; //change variable a's value to 5
    or
    let message = 'Hello!'; //define variable & assign value in one. can be split into let message; message = 'hello'

******Variable Names******
        can ONLY be of: letters, digits, $ and _ (NOT - !)
        first character CANNOT be a digit
        cannot be the same as a reserved word eg. let, class, return, function
       
        CASE MATTERS; name is different than NAME
        use camelCase as common convention for variables
        use ALLCAPS as common convention for constants THAT ARE "hard coded," VALUES KNOWN BEFORE EXECUTION eg. PI, COLOR_RED_HEX
        name should have a clean, obvious meaning describing the data it stores.
            make them: human readable (eg userName)
                stay away from abbreviations or short names (unless know what doing) (eg BAD: a, oots)
                maximally descriptive AND concise (eg favoriteColor instead of color)
                consistant - if a visitor is called a 'user' then should name variables like currentUser NOT newVisitor or prevPerson

******Special Variable Values******
        Infinity, -Infinity: self explanitory, numeric
        NaN: not a number - boolean resolves to 0, surprisingly, numeric
        null: is of its own data type! Means nothing/empty/unknown-->but type of defines as object due to error
        undefined: another of its own data type. means value not assigned.
        typeof x: a operator tells you the datatype

        ******NaN - Not a Number******
            NaN is a JavaScript reserved word indicating that a number is NOT a legal number.
            Trying to do math with a non-numeric string will result in NaN.
                NaN is sticky: math with NaN values return NaN, or concat. w/ a string
            NaN is a number! 
            typeof NaN returns number!

            isNaN() is a global function to determine if a value is not a number
            eg
                let x = 100 / "apple";
                isNaN(x); // returns true, x is NaN
        
        ******Infinity******
            Infinity (or -Infinity) is the value returned if you calc a number 
            outside of the largest possible number. 
            As does dividing by 0.
            eg
                let myNumber = 2;
                //execute until Infinity
                while (myNumber != Infinity) {
                    myNumber = myNumber * myNumber;
                }
            Infinity is a number!
            typeof Infinity returns number!