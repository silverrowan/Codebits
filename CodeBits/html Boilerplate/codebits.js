//Random number between a & b, inclusive
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
}

//convert kebab-case to camelCase
function camelize(str) {
    let nameArray = str.split('-');
    let firstWord = nameArray.shift();
    let nameArrayUpper = nameArray.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    let camelCase = firstWord.toLowerCase() + nameArrayUpper.reduce( (total, word) => total + word, "");
    return camelCase;    
}

//easy but imperfect random sort.
function shuffle(array) { 
    array.sort( () => 0.5 - Math.random() );
    return array;
}

//better random sort: fisher yates method
function shuffle(array) { 
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
    return array
}
//random sort by number
function shuffle(array) {
    array.sort( (a, b) => Math.random() - 0.5);
    return array;
}

//Keep only unique values
function unique(arr) {
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