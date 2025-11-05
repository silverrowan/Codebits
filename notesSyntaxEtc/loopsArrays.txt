LOOPS
FOR LOOPS
for (let i = 0; i < var; i++) { //note booliean operator will change depending on use
    //code
}

ARRAYS IN JS ARE NOT IDENTIFIED BY NAME - ATTEMPTS TO USE NAMED INDEXES WILL RE-DEFINE ARRAY TO REG OBJECT 

Arrays cannot be accessed from the end by Array.[-n], BUT CAN be accessed by Array.at(-1)!


//Array sorting is by String, even if numeric variables!
//to do so numerically need a "Compare function" which...how is this telling it to compare.....?
    Array.sort(function(a, b){return a - b}) (ascending)
    Array.sort(function(a, b){return b - a}) (descending)
//    note SORT function will apply to origianl array even if creating a new one.
//    use toSorted to sort new array and not touch OG array
        //eg.
        const numbers = [45,4,9,,16,25];
        const sortNum = numbers.toSorted() //sorts like a string
        const sortLikeNum = numbers.toSorted(function(a , b) {return a - b}) // sorts as numbers
            console.log(numbers)
            console.log(sortNum)
            console.log(sortLikeNum)
    Array.sort(function(){return 0.5 - Math.random()}); random(ish)
//Most popular *random sort* method is called "Fisher Yates Shuffle"
    for (let i = Array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = Array[i];
        Array[i] = Array[j];
        Array[j] = k;
    }

