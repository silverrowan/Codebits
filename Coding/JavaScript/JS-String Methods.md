*************************************
## What is a method
functionality built into a language or specific data typeof.
ALL string methods return a NEW string,
	they do NOT modify the original string!
	(Strings cannot be changed, only replaced)
## String
First index/position is 0, not 1 (unless otherwise noted)
these variables/strings will be referenced in further examples
    let alphabet = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
    let codeTest = "Hello, world";
    let fruit = "Apple, Banana, Kiwi";
### length
let length = alphabet.length; //returns 26
### Extracting Characters
    4 methods
    all return the character at specific index (position) in string
#### at(position)******
            ALLOWS use of neg values, for num indexes from the end (last char is -1)
            Relatively new. Support as of ES2022, supported in modern browsers since March 2022
                let char4 = codeTest.at(4) //returns o
                let charN3 = codeTest.at(-3) //returns r
#### charAt(position)******
            NO neg values
                let char4 = codeTest.charAt(4) //returns o
#### charCodeAt(position)******
            returns the unicode/UTF-16 code of the character at index
            NO neg values
                let charCode0 = codeTest.charCodeAt(0) //returns 72
#### property access [] as in arrays******
            NO neg values
                let char4 = codeTest[4] //returns o
            Might be a bit unpredictable
            makes strings look like arrays (but they aren't)
            if no character is found it returns undefined (charAt() returns an empty string)
            it is read only
                str[0]="A" gives no error, BUT doesnt work!

### concat()******
can be used instead of '+' operator
	these two lines do the same thing
		text = "Hello" + " " + "World!";
		text = "Hello".concat(" ", "World!");
### Extracting String Parts
3 methods
#### slice(start, end)******
Extracts part of a string and returns the extracted part in a new string
	let part = fruit.slice(7, 13); //ret Banana
	let part2 = fruit.slice(7); //ret Banana, Kiwi
	let part3 = fruit.slice(-4) //ret Kiwi
	let part4 = fruit.slice(-12, -6) //ret Banana
#### substring(start, end)******
similar to slice(), but start and end values less than 0 are treated as 0
#### substr(start, end)******
similar to slice(), BUT second parameter specifies LENGTH of extracted part
DEPRECIATED in latest standard!
### toUpperCase()******
### toLowerCase()******
### isWellFormed()******
returns 'true' if the string is well formed, otherwise returns 'false'.
well formed means it does NOT contain 'lone surrogates'
		a unicode code point not part of a valid surrogate pair used to rep characters in UTF-16
### toWellFormed()******
replaces all lone surrogates with unicode replacement character, (U+FFFD)
### trim()******
removes whitespace from start and end of string
#### trimStart()******
removes whitespace from start of string only
#### trimEnd()******
removes whitespace from end of string only        
### Padding
2017 additions
pads a string with another string multiple times until new string is a given length
let text = "5";
#### padStart()******
let padded = text.padStart(4,"0"); //returns 0005                
#### padEnd()******
let padded2 = (text + text).padEnd(4,"x"); //returns 55xx
### repeat()******
returns a new string with a number of copies of a string.
	DOES NOT alter OG string.
		result = codeTest.repeat(2); //ret Hello, worldHello, world
### replace()******
returns new string, replaces ONLY the FIRST match
CASE sensitive
	let newCodeTest = codeTest.replace("World", "Universe") //ret Hello, Universe
	to replace ALL matches, use regular expression w /g flag set
		let newCodeTest = codeTest.replace(/world/g, "Universe") //ret Hello, Universe, replaces multiple "world" instances
	to make case INsensitive
		let newCodeTest = codeTest.replace(/world/i, "Universe") //ret Hello, Universe --even though world was written lowercase
### replaceALL()******
new (2021), DOES NOT work in IE
	if use RegEx, instead of a string, must include /g flag or returns a TypeError
### Convert to an Array
#### split()******
let splitTest = codeTest.split(",") //splits on commas
	// splitTest = ["Hello", "World"]
let splitTest = codeTest.split("o") //splits on "o"s
	// splitTest = ["Hell", ", W", "rld"]
if the separator isnt present, entire string is at index[0]
if the separator is "", the returned array will be single characters.
	let splitTest = codeTest.split("") //splits to single char
		// splitTest = ["H", "e", "l", "l", "o", ",", " ", ... ]
### More Methods
comparissons using > & < & >= & <= are case sensitive
To determine if a sting is > another, it uses "dictionary" or "lexicographical" order (Technically, uses Unicode order)
	only moves onto the second character if the first ones are equal. Does not factor length (unless equal up to the end of one)
	Z > A
	letter > ""
	a > A
to ignore case, convert all to upper or lower case First.
		toUpper and toLower get janky when extending beyond english alphabet
exahustive list of methods found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String