---
tags:
  - code
  - language-agnostic
  - planning
  - jargon
---
Pseudocode: must describe what the code does in each line, so can be translated directly into coding language syntax.
    has a particular flow: 
- Constructs in Pseudocode should be written in ALLCAPS
## Main Constructs of Pseudocode
- SEQUENCE
    - linear tasks sequentially performed one after the other
- WHILE
    - is a loop with a condition at the beginning
    -  // WHILE condition, do____ until --> ENDWHILE
-  REPEAT-UNTIL
    - is a loop with a condition at the bottom
    - // REPEAT sequence --> UNTIL condition
- FOR
    - another way of looping
    - // FOR iteration bounds --> ....  --> ENDFOIR
- IF-THEN-ELSE
    - is a conditional statement that changes the flow of the algoritm
    - // IF condition THEN
     // sequence 1
     // ELSE
     // sequence 2
     // ENDIF
- CASE
    - is a generalization form of IF-THEN-ELSE
### Example Constructs by 6 Main Construct Group
#### Sequence
- // Input: READ OBTAIN GET
- // Output: PRINT DISPLAY SHOW
- // Compute: COMPUTE CALCULATE DETERMINE
- // Initialize: SET INIT
- // Add: INCREMENT BUMP
- // Subtract: DECREMENT
#### While
- WHILE condition sequnece
  ENDWHILE
#### REPEAT-UNTIL
- REPEAT sequence
  UNTIL condition
#### FOR
- FOR iteration bounds
  sequence
  ENDFOR
#### IF-THEN-ELSE
- IF condition THEN
  sequence 1 
  ELSE
  sequence 2
  ENDIFF
#### CASE
- CASE expression OF
  condition 1: sequence 1
  condition 2: sequence 2
  ...
  condition n: sequence n
  OTHERS:
  default sequence
  ENDCASE

- The two most needed commands are:
    -  CALL: calling function, invoking classes
    - EXCEPTION, 5WHEN: handling exceptions
#### Extra/Example Pseudocode Constructs
##### CALLING CLASSES/FUNCTIONS
- CALL avg age w StudentAges
- CALL Swap with CurrentItem and TargetItem
- CALL getBalance RETURNING aBalence
- CALL SquareRoot with orbitHeight RETURNING nominalOrbit
##### EXCEPTION HANDLING
- Begin
    - statements
    - EXCEPTION
        - WHEN exception
            - statements to handle the exception
        - WHEN another exception
            - statements to handle the exception
- END

### Naming Other Constructs
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