---
tags:
  - Ruby
  - loop
---
these are equivalent:
```ruby
Numbers = [1, 2, 3, 4]

Numbers.each do |x|
    puts(x)
end
```
and
```ruby 
Numbers = [1, 2, 3, 4]

Numbers.each{ |x| puts(x) }
```