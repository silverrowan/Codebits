---
tags:
  - JavaScript
  - data
  - data-type
  - string
---
### String
- A string must be surrounded by quotes.
    - "string", 'string', & `string` are all acceptable
    - double ("") & single ('') quotes are simple quotes. practically no difference between them in JS
    - backticks are "extended functionality" quotes. 
    - backtick `strings` can have another string or #expression embedded in them
        - eg. let str = "hello";
             let str2 = `can embed another ${str}`;
- A string may have 0 characters, 1 character, or many characters.
    - (there is no "character" type, as in some other langs)
- Strings *can* contain number characters, or be entirely number characters, *but they are still strings,* unless/until the data-type is converted. 
    - eg let string = "54" //this is a string
         let number = 54 //this is a number