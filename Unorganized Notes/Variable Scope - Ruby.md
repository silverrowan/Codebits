---
tags:
  - Ruby
  - variable
  - scope
---
- A variable's scope determines where in a program a variable is available for use.
- scope is defined by where the variable is initialized or created.
- In Ruby, variable scope is defined by a **method definition** or by a **block**
    - these have different behaviors when it comes to variable scope
## Methods and Scope
- methods have self-contained variable scope.
- this means that only variables initialized within the method's body can be referenced or modified from within the method's body.
- Additionally, variables initialized inside a method's body aren't available outside the method's body
    - ex. below: this is how we can use 'name' inside the method below, but using the method doesn't change the value of the name variable defined outside it.
```ruby 
name = 'Somebody Else'

def print_full_name(first_name, last_name)
    name = first_name + ' ' + last_name
    puts name
end
...
print_full_name 'Peter', "Hend" # prints Peter Hend
print_full_name 'Sandy', 'Baker' # prints Sandy Baker
puts name #prints Somebody Else
!
```
## Blocks and Scope
### What is a block?
- a block is a piece of code that follows a method's invocation
    - deliminated by either curly braces `{ }` or `do/end`
```ruby title:"The same block, written different ways"
total = 0
[1, 2, 3].each { |number| total += number }
puts total # prints 6

total = 0
[1, 2, 3].each do |number| 
    total += number
end
puts total # prints 6
```
- `{ |number| ... }` and `do |number| ... end` are both blocks
    - while they look different, their behaviour is identical
    - generally the `{ }` version is used for one-liners only: the method call & block must fit on the same line 
- In both cases the code can access and modify `total` a variable defined *outside* of the block.
- However any variables initialized inside teh block (eg. `number`) can't be accesssed by the outer code
- & with **blocks** Inner scope can access variables of the outer scope, but **not** the inverse
- ! NOT ALL `do...end` or `{ }` pairs imply a block!
    - key distinguishing factor to decide if a `do...end` or `{ }` is considered a block:
        - seeing if it *immediately* follows a method invocation
```ruby title:"example of NOT a block"
arr = [1, 2, 3]

for i in arr do
    a = 5 #a is initialized here
end

puts a
#=> a *is* accessible here, because the do...end above was not a block
#'for' is not a method invocation
```

Some [[Variable Types in Ruby]] do interact with these scope rules differently 

> [!warning]
> Note: The term 'global scope' doesnt really apply in Ruby like it does in JavaScript, as there is a $global_variable, so the term could cause confusion

[[do...end blocks in Ruby]]
[[Variables in Ruby]]