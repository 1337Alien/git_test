let name = "Sebas";
let surname = "Cygnus";
console.log(`Hello ${name} ${surname}, you beautiful cunt`)
/*
let max = 57;
let actual = max - 13;
percent = actual/max;


let toInfinity = 2;
let iteration = 0
// Execute until Infinity or over 1000 iterations
while (toInfinity != Infinity && iteration < 1000) {
    console.log(toInfinity = toInfinity * toInfinity);
    console.log("Iteration: " + ++iteration);
}
*/

let add7 = n => n + 7;
console.log(add7(3));
let multiply = (a, b) => a * b;
console.log(multiply(4,5));

function capitalize(str) {
    if (typeof str === "string") {
        lowercaseString = str.toLowerCase();
        firstChar = lowercaseString.charAt(0);
        capitalizedFirst = firstChar.toUpperCase();
        slicedAfterFirst = lowercaseString.slice(1);
        final = capitalizedFirst + slicedAfterFirst;
        return final
    } else {
        return "Not a string, dummy"
    }

}
console.log(capitalize("aSLDKJALalksdjlaksjdALSDKJlkjasd"));

function lastLetter(str) {
    if (typeof str === "string") {
        lastChar = str.charAt(str.length-1);
        return lastChar
    } else {
        return "Not a string, dummy"
    }
}
console.log(lastLetter("aaasdasldkja"));
console.log(lastLetter("aaasdasldksadDASD"));
