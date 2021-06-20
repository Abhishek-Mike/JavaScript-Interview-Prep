// Que  Find the Longest Word in a String.

// Input:"The quick brown fox jumped over the lazy dog"
// Output: 6

let str = "The quick brown fox jumped over the lazy dog"

let str1 = str.split(' ')  // array mai slit krna jaruri h

let LongestWord = str1.sort((StringA,StringB)=>{
    return StringB.length - StringA.length
})

console.log(LongestWord[0].length,LongestWord[0]);

//----------------------------------------------------------


const longword = (str) => {
    const word = str.split(' ').sort( (a,b) => {
      return  b.length - a.length
    });
    return word[0]
}

console.log(longword(str));