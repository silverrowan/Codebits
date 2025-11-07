## Function Scope
when a function is created, the variables etc defined inside it are in their
    own separate "compartment" inside the function - they can't be targeted/reached
    by code outside the function.
NOTE: the same scope rules **DO NOT** apply to loop and conditional blocks, 
    **JUST** functions -- even though they look very similar.
### Global Scope
The top-level, outside all functions.
Values defined here are accessible from everywhere in the code.
### Local Variables
- variables declared inside a function are ONLY visible inside that function
### Outer Variables
- functions can access & modify variables declared outside of them though
- the outer variable is *only* used if there is no local one.
- if a same-named variable is declared inside and outside the function than the inside one [[variable shadowing |'shadows']] the outer one, and the outer one is not used or altered
### Global Variables
- variables declared outside of *any* function
- these variables are visible to all functions (unless shadowed by local variables)
- Its good practice to minimize use of global variables.
    - modern code has few to no globals, most variables reside inside their functions
    - sometimes they can be useful to store project-level data.
### Why silo variables etc
- primarily for security and organization
- this allows you to call in external scripts that may be using the same variable names
    - without them messing with your script variables of the same name.
- If calling multiple external script files into the same document and they use the same global *variable* names, an error will stop the second one from loading
- if they use the same global *function* names, the second function will overwrite (re-declare) the first version of the function
    - Keeping this code contained in functions prevents this problem
******
JS-Function Basics -> Function Scope on 2025-11-05