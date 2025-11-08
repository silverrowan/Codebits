---
tags:
  - UNCLEAR
---
think MTG stack. or LIFO (last-in-first-out)
bottom layer is the main() or global() layer
then the first #function it runs, 
if that calls another function it goes on top of that one, and so on. 
script executes what ever is on the top of the stack. once it completes a function, its removed from the stack, and the script continues executing the one below --==where it left off I assume.==
- Something about the way the stack works makes me think it is intrinsically linked to the way #scope works in JavaScript. Look into this?
### Stack overflow
The call #stack has a fixed (max) size, which will depend on the host environment, either the web browser, or Node.js
If the number of execution contents exceeds the size of the stack, a #stack-overflow error occurs.
    eg. a recursive function with no exit condition will cause the engine to issue a stack overflow error.
## Asynchronous
- #JavaScript is single threaded, and so only has one call stack. So it can only do one thing at a time. 
- When executing a script the engine executes code from top to bottom, line by line. "synchronous"
- Asynchronous means that the engine can execute *other* tasks while waiting for another task to be completed. For example the engine can:
    -  Request data from remote server
    - display a spinner
    - when the data is available, display it on the webpage.
- To do this, JS uses an 'event loop1
- ==IM CONFUSED HERE -- its saying JS is synchronous AND Asyncronous==