******Variable Types******
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