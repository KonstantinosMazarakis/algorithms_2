// rotateString (str, distance) -> accepts two arguments, a string to rotate (str)
// and a number of characters to 'rotate' it by (distance). output is that string
// shifted that many characters to the right, wrapping around the end of the
// string (don't lose characters or add any spaces)
// ("Hello world!", 1) -> "!Hello world"
// ("Hello world!", 5) -> "orld!Hello w"
// ("Hello world! ", 5) -> "rld! Hello wo"
// the output should be the same length as the parameter str
// remember to psuedocode it first!
// bonus - can it handle a negative distance?
// ("Hello world!", -1) -> "ello world!H"
// if distance is longer than str? use modulo operator to trim it down
// ("Hello world!", 129) -> "lo world!Hel"

function rotateString(str, distance) {
    let output = "";
        distance = distance % str.length
    if(distance < 0){
        distance = distance + str.length
    }
    for(let i = str.length - distance; i < str.length;i++){
        output =  output + str[i]
    }
    for(let i = 0;i < str.length - distance;i++){
        output =  output + str[i]
    }
    return output;
}
console.log(rotateString("Hello world!", 1))
console.log(rotateString("Hello world!", 3))
console.log(rotateString("Hello world!", 5))
console.log(rotateString("Hello world!", 7))
console.log("-------------------------------------")
console.log(rotateString("Hello world!", 11))
console.log(rotateString("Hello world!", 119))
console.log(rotateString("Hello world!", -1))
console.log("-------------------------------------")

console.log(rotateString("Hello world!", -2))
console.log(rotateString("Hello world!", -3))

// isRotation(str, original) -> accepts two arguments, a potentially rotated string
// (str) and a string presumed to be the original copy (original). returns true if
// the original string rotated by some distance can become str (or vice versa).
// note that this should immediately fail if the two strings are not the same length!
// ("rld!Hello wo", "Hello world!") -> true
// ("Hello world!", "rld!Hello wo") -> true
// ("Hello world!", "rld!hello wo") -> false
// ("abaaaabbbc", "aabbbcbaaa") -> false
// this is brute forceable, but there is a clever way of solving this:
// do the brute force algorithm first, then do another attempt

function isRotation(str, original) {
if (str == original){
    return true
}
if (str.length != original.length){
    return false
}
for (var i = 0; i < str.length;i++)
if (rotateString(str,i) == original){
    return true
}else
    return true
}

console.log(isRotation("Hello! My name is Ryan!Hello! It's nice to meet you!", "e is Ryan!Hello! It's nice to meet you!Hello! My nam"));
console.log(isRotation("a", "a"));
console.log(isRotation("", ""));