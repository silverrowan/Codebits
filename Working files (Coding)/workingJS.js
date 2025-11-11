// As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

//     Take in an array.
//     For every even number, it will triple it.
//     Then it will sum all those even numbers.


// Rewrite the sumOfTripledEvens(array) function using these three methods
//  map, filter and reduce

//Choose a random number between (inclusive) "a" and "b"; 
//where "a" is the lowest value, and "b" the highest
// function randomInteger(a, b) { 
//         return Math.floor( Math.random() * b + a );
// }
// //random length array of random numbers with descending upper range\
// let randomDescendingishArray = [];
// for (i = randomInteger(4,10); i > 0; i--) {
//     randomDescendingishArray.push(randomInteger(1,i))
// }
// console.log(randomDescendingishArray)

// function sumOfEvenTriples (array) {
//     return array
//         .filter(num => (num % 2) === 0) // is even
//         .map(n => n * 3)
//         .reduce( (sum, current) => sum + current, 0 );
// }

// let total = sumOfEvenTriples (randomDescendingishArray)
// console.log(total);

// Go to the array methods exercises at the end of the JavaScript.info array methods article and do the following exercises only:

//     Translate border-left-width to borderLeftWidth
//     Filter range
//     Filter range "in place"
//     Sort in decreasing order
//     Copy and sort array
//     Shuffle an array
//     Filter unique array members

// let testwords = "kebab-kebab-blue";
//  let camelArray = []; 

// function camelize(string) {
//     function kebabSplitter(string) {
//         let kebabArray = string.split("-");
//         return kebabArray;
//     }
//     function capsFirstLetter (string) {
//         let firstLetter = string.slice(0,1).toUpperCase();
//         let wordEnd = string.slice(1);
//         return firstLetter + wordEnd;
//     }

//     // separate the first word from kebab-case in 
//     let kebabArray = kebabSplitter(string);
//     let kebabFirstWord = kebabArray.shift().toLowerCase();

//     for (let word of kebabArray) {
//         let firstLetter = word.slice(0,1).toUpperCase();  
//         let wordEnd = word.slice(1);
//         camelArray.push(firstLetter + wordEnd);
//     }

//     camelArray.unshift(kebabFirstWord);
//     console.log(camelArray);

//     let camelCase = camelArray
//         .reduce( (camelName, currentItem) => camelName + currentItem, "" );
//     console.log(camelCase);
//     camelArray.length = 0
//     return camelCase;
// }
// console.log(camelize("background-color"));// == 'backgroundColor';
// console.log(camelize("list-style-image"));// == 'listStyleImage';
// console.log(camelize("-webkit-transition"));// == 'WebkitTransition';


// function camelize(str) {
//     return str
//         .split('-')
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }

let arrayTest = [5, 2, 1, -10, 8, 21];


// function filterRange (array, a, b) {
//     let filtered = array
//         .filter( item => item >= a)
//         .filter( item => item <= b)
//     return filtered;
// }
// console.log( filterRange(arrayTest, 5, 8) );

// function filterRangeInPlace (arr, a, b) {
//     for (let i = arr.length; i >= 0; i--) {
//         if ( arr[i] >= a &&  arr[i] <= b)  {
//             continue;
//         } else { arr.splice( i, 1) }
//     }
// }
// console.log(filterRangeInPlace(arrayTest, 3, 7));
// console.log(arrayTest);

// function copySorted(arr) {
//     let sorted = arr.toSorted();
//     return sorted;
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// function shuffle(array) { //easy but imperfect random sort.
//     array.sort( () => 0.5 - Math.random() );
//     return array;
// }

// function shuffle(array) { //fisher yates methd
//     for (let i = array.length -1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let k = array[i];
//         array[i] = array[j];
//         array[j] = k;
//     }
//     return array
// }


// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [2, 1, 3]

// console.log(shuffle(arr));
// // arr = [3, 1, 2]
// // ...


function unique(arr) {

    // for (item of arr) {
    for (i = 0; i < arr.length; i++) {
        let string = arr[i];
            for (j = arr.length; j > i; j--) {
                if (string === arr[j]) {
                    arr.splice(j, 1)
                }
            }
    }
return arr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O