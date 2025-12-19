---
tags:
  - Ruby
  - assignment
  - operator
  - math
---
Variable names are re-usable, but doing so will overwrite the old data.
```ruby
age = 18 # age #=> 18
age = 33 # age #=> 33
```

When you want to preform an operation and assign it to the same variable, there are some shorthand operators for this
```ruby
age = 18

age = age + 4
# can also be writte as...
age += 4
```
There are similar assignment operators for all the common math operators
- -=
- \*=
- /=
- \*\*= ? I assume this one...

[[Variables in Ruby]]