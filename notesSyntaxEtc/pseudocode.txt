Pseudocode: must describe what the code does in each line, so can be translated directly into coding language syntax.
    has a particular flow: SEQUENCE, CASE, WHILE, REPEAT-UNTIL, FOR, IF-THEN-ELSE. these constructs are written in allcaps
    SEQUENCE: represents linear tasts sequentially performed one after the other
        // Input: READ OBTAIN GET
        // Output: PRINT DISPLAY SHOW
        // Compute: COMPUTE CALCULATE DETERMINE
        // Initialize: SET INIT
        // Add: INCREMENT BUMP
        // Subtract: DECREMENT
    WHILE: is a loop w a condition at its begining
        // WHILE condidtion sequence --> ENDWHILE
    REPEAT-UNTIL: is a loop with a condition at its bottom
        // REPEAT sequence --> UNTIL condition
    FOR is another way of looping
        // FOR iteration bounds --> sequence --> ENDFOIR
    CASE: is a generalization form of IFTHANELSE
        // CASE expression OF
//          condition 1: sequence 1
//          condition 2: sequence 2 ....
//          condition n: sequence n
        // OTHERS: default sequence
        // ENDCASE
    IF-THEN-ELSE: is a conditional statement, changing the flow of the algorithm
        // IF condition THEN
        //      sequence 1
        // ELSE
        //      sequence 2
        // ENDIF

these 6 are the most common, but others may still be needed. eg. CALL to invoke classes/functions, handling exceptions, more depending on field/language
    Calling classes / functions
    // CALL blah
    // CALL whatev RETURNING xyz
    Exception handling
    // BEGIN
    //    statement
    //    EXCEPTION
    //      WHEN exception
    //          statements to handle exception
    //      WHEN another exception
    //          statememts to handle exception
    //  END
DONT USE PSEUDOCODE KEYWORDS AS VARIABLES!
some simple rules to make it more univerally understood:
    1: Capitalize intial word
    2: Only 1 statement per line
    3: Indent to show hierarchy, improve readability & show nested constructs
    4: ALWAYS end multiline sections using an END keyword. (ENDIFF/ENDWHILE/END/etc)
    5: keep statements language INdependant
    6: Use naming domain of the problem, not the implementation.
                eg. "Append the last name to the first name" INSTEAD OF "name = first_last"
    7: Keep it simple, concise & readable