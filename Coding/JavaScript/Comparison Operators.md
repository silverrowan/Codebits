---
tags:
  - JavaScript
  - comparison
  - operator
---
## Comparison
- (These return true/false
- [[String Data Type|strings]] are compared alphabetically %% (technically Unicode order) %%, like a book
    - lowercase has greater value than corresponding capital letter
### Comparison Operators
- < less than
- \>greater than
- <= less than or equal to
- \>= greater than or equal to
- === strict equality (value AND type)
- !== strict non-equality
    - usually better to use the strict types as they tend to result in fewer errors.
    - (== and != are the non-strict versions of === & !==
    - (null \== undefined & *no other values*, but are not === (diff datatypes))
		(null->0, undefined->NaN for comparisons, but not for \==)
### Conversion between types
- using comparison operators (not the strict equality tests) will cause the script to attempt to convert other data types to numbers.
    - "stringNumber"-->number (eg. "12" --> 12)
    - null --> 0 %% (but not for \==) - unclear if I meant to include the non-strict %%
    - undefined --> NaN %% (but not for \==) - unclear if I meant to include the non-strict %%
#### ![[Null and Undefined]]