---
tags:
  - Ruby
  - variable
  - scope
---
# Variable Types in Ruby
#### CONSTANTS
- declared in ALLCAPS, by convention eg `MY_CONSTANT = 'stable string'`
- store data that never needs to change
    - ruby will *allow* you to change the value assigned to a constant, but just because you can doesn't mean you should. you should not.
- constants cannot be declared in method definitions, and are available throughout the application's scopes
#### $global_variables
- declared by starting thde var name w a `$`. eg. `$var = 'avail throughout app'`
- available throughout entire app, overriding all scope boundaries.
    - rubyists tend to avoid them as there can be unintended consequences/unexpected complications
#### @@class_variables
- declared by starting var name w 2 `@`. eg. `@@class_var = 0 `
- accessible by instances of your class, as well as the class itself.
    - When you need to declare a variable that is related to a class, but each instance of that class does not need its own value for this variable, you use a class variable.
- Class variables must be initialized at the class level, outside of any method definitions.
    - can then be altered w class or instance method definitions
#### @instance_variables
- dewclared using 1 `@` at the star of name. eg. `@var = 'avail in curr class instance'`
- available throughout the current instance of the parent class.
- instance variables can cross some scope boundaries, but not all of them
#### local_variables
- most common variables tlo use.
- obey all scope boundaries
- declared by NOT starting var name w `$`or `@`, or using ALL_CAPS
    - EG. `var = 'i obey scope boundaries'`