---
tags:
  - Ruby
  - code
  - programming
---
When we call the `puts` method we're telling Ruby to print something to the screen. *however* Ruby does *not* `return` what it prints to the screen!

Expressions do something, but they also return something. The value returned is not necessarily the action that was preformed.

eg.
```ruby
puts 'stuff'
stuff
=> nil
```
```ruby
a = puts "stuff"
puts a
#what should we expect?
```
-  a has been assigned the value that `puts "stuff"` RETURNS - aka nil
- so `puts a` prints.... an empty string. (so it does have the line for the puts printout - but it has nothing in it.)