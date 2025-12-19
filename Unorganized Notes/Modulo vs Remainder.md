---
tags:
  - code
  - programming
  - math
---
- The remainder and modulo are *not* actually the same thing
- `{ruby icon} 16.remainder(5)` #=> 1
- this is the same as 16%5
- HOWEVER you cannot count on this always being true!
-  .divmod method calculates BOTH the integer result of the division and its modulo value.
  - math has a subtle but important difference between modulo and remainder operations
      - SUMMERIZED: Modulo operations ret a pos int when teh second operand is positive and a neg iteger when teh second operand is negative
      - remainder return a positiove integer when ten first op is positive, and a negative ineger when teh first operand is negative

| a   | b   | a%b | a.remainder(b) | a.divmod(b) |
| --- | --- | --- | -------------- | ----------- |
| 17  | 5   | 2   | 2              | [3, 2]      |
| 17  | -5  | -3  | 2              | [-4, -3]    |
| -17 | 5   | 3   | -2             | [-4, 3]     |
| -17 | -5  | -2  | -2             | [3, -2]     |
- so, when working with POSITIVE INTEGERS we don't need to worry about the difference between modulo & remainder - the return value is positive and identical either way.
- however if either number is negative things get confusing