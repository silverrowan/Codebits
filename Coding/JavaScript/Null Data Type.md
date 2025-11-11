---
tags:
  - JavaScript
  - data
  - data-type
  - "null"
  - nullish
---
## Null
- **NOT** a reference to a "non-existing object" nor a "null pointer"
    - %% I don't actually know what these are, but apparaently they are things %%
- Just a special value that represents nothing/empty/value unknown.
- Null is the *only* value of the null type.
### Null and typeof
- There is an intentionally maintained bug with `null` and `typeof()`
    - `typeof(null)` returns 'object!'
        - null is NOT an object. it is its own type.
        - this error is kept for compatibility with older code.

![[Null and Undefined]]