---
tags:
  - Ruby
  - variable
---
- you can assign a name to something by using the assignment operator `=
    - eg. `number = 1
    - this assigns the name `number` to the thing (object) that is the number 1.
    - from now on we can refer to this object by using the name `number`
    - ```ruby
      number = 1
      puts number
    # outputs "1"
      ```
- ! A variable itself is not a 'thing' it's just the name for a 'thing' (object)
    - you can think of it like a post-it with the name number written on it, and stuck to the actual thing (in this case, a number)
    - whenever we use a variable name that has been defined before we refer to the *actual object* it has been assigned to.
- Variable names are unique - there is only one at any point. If you assign the same name to another value, it simply overwrites the previous ones.
```ruby
number = 4
number = number * 3
puts number + 2
#outputs 14 (12 + 2)
```
- while this example is overly simplistic, it can be useful to break up manipulations in a similar way to make the code more readable
- @  variable names can be useful to break up long lines and make code more expressive and readable
- ~ note on formatting: notice there are spaces around the assignment operator `=`, as well as the arithmetical ones (`+` & `*`)
## Types of Variables
- Ruby has different kinds of variables
- The most common (and one discussed above) is the *local variable*
- learn about another type when we talk about classes and objects #later-lesson 
## Things on the *right* go first
- in order to assign a thing on the right side to the name on the left side, Ruby first needs to figure out the right side.
```ruby title:eg
number = 2 + 3 * 4
puts number
#outputs 14
```
- Ruby 'notices' the assignment operator, and therefore can assign the part on the right to the part on the left. But first it needs to determine what the right-hand thing *is*
    - first will look at the expression ` 2 + 3 * 4`, which resolves to 14
    - *then* will assign the name `number` to the object on the right
        - you can imagine, that very briefly, the code looks like number = 14
[[Data Types in Ruby]]