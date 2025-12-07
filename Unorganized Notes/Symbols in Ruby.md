---
tags:
  - Ruby
  - string
  - symbol
---
- In Ruby, symbols are a twist on strings
- strings can be changed, so every time one is used it must be stored in memory--*even if an existing string of the same value exists.*
- Symbols are stored in memory only once. This makes them faster in certain situations.
- Symbols are common preferred over strings as the keys in hashes.
## Create a Symbol
- to create a symbol, put a colon at the beginning of some text `:my_symbol`
- 