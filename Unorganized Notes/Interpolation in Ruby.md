---
tags:
  - Ruby
  - string
---
# Interpolation in Ruby
- allows you to evaluate a string containing placeholder variables.
```ruby title:eg
name = "Odin"

puts "Hello, #{name}"  #=> "Hello, Odin"
puts 'Hello, #{name}' #=> "Hello, #{name}"
```
- only work in double quotes " not single quotes '
- format: `#{variable_Name}`