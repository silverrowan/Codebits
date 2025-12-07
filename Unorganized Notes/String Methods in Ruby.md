---
tags:
  - Ruby
  - string
---
# Many, Many methods in Ruby
## Some common ones
```ruby title:"Common String Methods" 
#capitalize
"hello".capitalize #=> "Hello"

#include?
"hello".include?("lo") #=> true
"hello".include?("z") #=> false

#upcase
"hello".upcase #=> "HELLO"

#downcase
"Hello".downcase #=> "hello"

#empty?
"hello".empty? #=> false
"".empty? #=> true

#length
"hello".length #=> 5

#reverse
"hello".reverse #=> "olleh"

#split
"hello world".split #=> ["hello", "world"]
"hello".split("") #=> ["h", "e", "l", "l", "o"]

#strip
" hello, world   ".strip #=> "hello, world"


```
```ruby title:"More Examples...in use"
"he77o".sub("7", "l") #=> "hel7o"

"he77o".gsub("7", "l") #=> "hello"

"hello".insert(-1, " dude") #=> "hello dude"

"hello world".delete("l") #=> "heo word"

"!".prepend("hello, ", "world") #=> "hello, world!"

```


## Convert other objects to Strings
- convert with the to_s method
```ruby
5.to_s #=> "5"

nil.to_s #=> ""

:symbol.to_s #=> "symbol"
  ```