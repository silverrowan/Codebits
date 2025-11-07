## Comparison
(These return true/false, strings are compared alphabetically, like a book--lowercase has greater value than corresponding capital letter)
	=== strict equality (value AND type)
	!== strict non-equality
		usually better to use the strict types as they tend to result in fewer errors.
	< less than
> greater than
	<= less than or equal to
>= greater than or equal to
	(== and != are the non-strict versions of === & !==, which will convert between data-types & can cause more erros)
		(null==undefined & *no other values*, but are not === (diff datatypes))
		(null->0, undefined->NaN for comparisons, but not for ==)
******
JS-Basic Operators -> JS-Comparison Operators on 2025-11-05