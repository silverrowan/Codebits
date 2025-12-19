---
tags:
  - Ruby
  - variable
---
# Variables in Ruby
## Clarity, Theory 
- Ruby is a language that aims to be natural to read and easy to write
    - *remember this* when you're naming your variables
- Naming variables clearly pays dividends when you have to review your code later (especially much later)
- % quote: John Woods
- % "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live"
- % -\_- _thats an interesting choice....
- The most basic thing you can do to write clean code is to name your variables properly
## What is a variable
- Variables are *references*
> [!Important]
> - ! A variable itself is not a 'thing' *it's just the name for a 'thing'* (object)
>     - you can think of it like a post-it with the name number written on it, and stuck to the actual thing (in this case, a number)
>     - whenever we use a variable name that has been defined before we refer to the *actual object* it has been assigned to.
>     - when we re-assign a variable, we move the sticky-note to a new object
>     - when we modify(self) a variable, we change the object with the sticky-note itself
## Variable Names
- Variable names are unique - there is only one at any point. If you assign the same name to another value, it simply overwrites the previous ones.
```ruby
number = 4
number = number * 3
puts number + 2
#outputs 14 (12 + 2)
# note on formatting: notice there are spaces around the assignment operator `=`, as well as the arithmetical ones (`+` & `*`)
```
- while this example is overly simplistic, it can be useful to break up manipulations in a similar way to make the code more readable  es and make code more expressive and readable
### Naming Conventions
- (local) variable names should be lowercase and multiple words joined by an underscore `_`
    - this is called *snake_case*
## Creating Variables
- you can assign a name to something by using the assignment operator `=
            - *note* be careful not to mix up assignment `=` and equality `==` operators!
    - eg. `number = 1
    - this assigns the name `number` to the thing (object) that is the number 1.
    - from now on we can refer to this object by using the name `number`
```ruby
number = 1
puts number
# outputs "1"
  ```
### Types of Variables
- Ruby has different kinds of variables
- The most common (and one discussed above) is the *local variable*
- There are 5 types of variables in Ruby
    - Constants,
    - Global Variables,
    - Class Variables,
    - Instance Variables, and
    - Local Variables
In brief...
![[Variable Types in Ruby]]


## Quirks
- when assigning variables to other variables things don't always go as expected.
```ruby
a = 4
b = a
a = 7
puts b #=> 4!
```
BUT
```ruby
desired_location = 'Barcelona'
johns_location = desired_location
# both => 'Barcelona'
johns_location.upcase! #=> 'BARCELONA'
puts desired_location #=> 'BARCELONA'
#!!!!!!!
```
- variables point to values in memory, and are not deeply linked to each other
- when saying `b = a`, you're actually setting `b = value object a is pointing at`
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
[[Variable Scope - Ruby]]

