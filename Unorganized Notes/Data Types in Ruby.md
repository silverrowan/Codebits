---
tags:
  - Ruby
  - data
  - data-type
---
Ruby comes with lots of things pre-baked in, and provides tones of tools to use and hit the road running.
- data types are types of objects that are mainly used to represent data, such as numbers, text and other values.
## Common data types in Ruby
- these object types cover about 98% of built-in data types you'll use on a day-to-day basis.
- there are more data-types, but they're used much less often 
### Numbers
- they're numbers
- create one by typing numbers `123`
- create a negative one by prepending with the dash `-123`
- and of course, there are decimals numbers `1.23`
- you can use an underscore to separate thousands places (instead of , or ') `1_123.45` but this is optional, and may be ommitted `1123.45 == 1_123.45`
- there are two kinds of numbers.
- ! when doing calculations integers and floats are different!
- #### Integer ("Fixnum")
    - those without a fraction/decimal point. "*whole numbers*"
    - depending on thier size there are two types of these! You can ignore this for now. #later-lesson 
    - ! if you do a calculation that uses integer numbers, you'll **ALWAYS** get an integer back -- even if the math should create a decimal ` 1/3 #=> 0`
    - ! this does not round, just cuts off the decimal!
- #### Floating (Decimal)
    - Has decimal. Even more sub-types.
    - ! when you do calculations, if any number is a float, you will get a float back. `1.0+2 #=>3.0`
### Strings (texts)
- text
- precisely: a string is an object that represents a specific text.
- multiple ways to make strings
    - most simple & common is to enclose some characters in quotes. double & single work
        - eg. "this is a string"
        - eg. 'this is also a string'
            - "but this type allows for *[[string interpolation]]"
- Things you can do with strings:  [[String Methods in Ruby]] ... and:
    - concatenate using `+`
        - "snow" + "ball" => "snowball"
        - "hi" + "hi" + "hi" => hihihi
            - this one can also be done like this `hi * 3`
    - multiplying a sting means repeat it that many times (eg above)
        - eg also of note: "1" + "1" + "1" => "111"
            - "1" * 3 => "111"
    - 
### True/False/Nil
- t/f as expect
- nil represents 'nothing'
### Symbols
- similar to strings in some ways
- create by using a colon in front of a word `:symbol`
- normally symbols dont contain spaces, if have mult words, concat with underscores `:like_this
- when to use symbols vs strings?
    - not a hard line/ clear definition
    - rule of thumb: if the text itself is data, use a string. If its *code* use a symbol (especially if its used as a key in hashes)
    - another way of looking at it: symbols arent *really* text. They're *unique identifiers* like a bar code. While strings represent data that can change, symbols represent unique values which are **static
    - more technically - if you use strings that contain the same text in your code multiple times, then a new string object will be created every time. 
        - eg. if you have 10 `puts "hello"` then 10 actual string objects are created. Whereas if you use a symbol `puts :hello` 10 times, then only *one single object* will be created and *re-used*
        - ~ symbols are unique identifiers that are considered code, not data
        - @ true, false, nil & all numbers also behave as identifiers with stable object ids
### Arrays
### Hashes