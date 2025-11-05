******JavaScript Strings******
******************************

******Declaring Strings******
    Strings must be declared using quotes at begining and end of String.
        single, double, and backtick are all acceptable quotes.

    ******Template Literals******
        backticked strings are called 'template literals' and have some special properties
            can have JavaScript embedded in them.
                wrap the JavaScript inside: ${ } and the result will be incl. in the string
                    eg let userName = "chris";
                        let greeting = `hello, ${userName}`; //returns hello, chris
                        let userLastName = "smith";
                        let greeting2 = `hello, ${userName} ${userLastName}`;
                            //returns hello, chris smith
                                note the concatination WITHOUT using the '+' operator!
                        let mathString = `total = ${ 3 + 4 }` //returns total = 7
            can be declared over multiple lines
                eg let newline = `One day you finally knew 
what you had to do and began`;
                    //returns string INCLUDING line break
                    //in a normal string would need to include characters \n
    ******Include quotes in a string******
        use a different type of quote to enclose the string
            eg. let quote = 'she said "stuff"' //returns she said "stuff"
        escape the problem quote marks (mark them as text not code)
            eg. let lyrics = 'I\'ve got no right to take my place...'; // returns I've...
            this teqnique can be used to insert other special characters as well

******Convert numbers to Strings******
    like Number() can convert string numbers to number data type
        there is String() to convert number data type to string type.