---
tags:
  - JavaScript
---
- Causing an #Error is called "*throwing*" an error
- errors are when the program does something you don't want it to, or stops running/crashes
## Syntax vs Logic errors
- generally there are two main error type 'classifications' (descriptive, NOT types the program reports)
    - Syntax errors - spelling, punctuation, etc errors, 
    - Logic errors - the syntax is correct, but the code is not what you intended it to be. (Meaning it runs, but produces incorrect results) These are often harder to fix, especially as there often isn't an error message to help you.
## Error Messages
- (Most) error messages provide valuable knowledge on how to resolve them.
    - information to help:
        - locate the code responsible for the error
        - determine why you have the error
        - resolve the error
## Anatomy of an Error Message
- in #JavaScript an error message is a type of #object. 
- this first part of the error message displays the *type* of error. (the first clue!)
- different errors of the same type will generally have different, more specific messages based on what is causing the error.
- understanding both the *error type* and *error message* is crucial to understanding why the error message is there.
- The next part tells us the file and line number the error is coming from. Sometimes it will even tell you column/character where its occurring.
    - allowing you to easily navigate to the problem line in your code.
- An important part of an error message is the **stack trace** #stack-trace
- you can also tell the program to *make* error (messages?), presumably for testing error-catch methods?
### Stack Trace
- This helps understand when the error was thrown, and what functions were called that led up to the error.
    - looks like it's the chain of impacted functions that lead to the error?
## Common Error Types

### Syntax Error
#syntax-error: when the code you're trying to run isn't written properly.
### Reference Error
#reference-error: These arise because whatever variable you are trying to reference does not exist/been initialized (within the current scope), or has been spelled incorrectly!
### Type Error
- #type-error: these errors can be thrown for a few different reasons.
- these errors are caused when an *operation could not be preformed*. 
    - *typically but not solely* caused when a value is not of the expected type.
    - an operand or argument passed to a #function is incompatible with the type expected by the operator or function
    - or when attempting to modify a value that can't be changed
    - or when attempting to use a value in an inappropriate way
        - (annoyingly it looks like JS error message will say that an existing function isn't a function if its being applied to the wrong data type -\_- judging from the example.)
## Tips for resolving errors
1) understand error messages tell you exactly what is wrong with your code and where.
2) Now google the error! Chances are you'll find a fix, or at least more clarity about why you're getting it.
3) Use the debugger. 
4) Make use of the console.
    - also useful here: in addition to `console.log()` there is `console.table()` and `console.trace()`
## Errors Vs. Warnings
- #warnings are *not* errors
- errors will **stop** the execution of your program or process and prevent further action
- warnings are messages that provide insight on *potential* problems that may not necessarily crash your program at runtime, or ever. 
    - while you **should** address these warnings as soon as possible, they are not as significant as errors and are more likely to be informational.
## Try... catch statements
- execute the code in the `try` block. if an error occurs, it is automatically caught by the `catch` block.
    - more details is a #later-lesson
