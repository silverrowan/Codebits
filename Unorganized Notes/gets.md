---
tags:
  - Ruby
  - method
---
- `gets` is a method to get user input
    - it waits for the user to type in information and press enter
    - (it includes the \n character in the reply)
        - use .chomp to remove trailing \n
```ruby
name = gets
#blinks here until user enteres something 
userInput
=> userInput\n

#to clean up the \n
name = gets.chomp
userInput
=> userInput
```