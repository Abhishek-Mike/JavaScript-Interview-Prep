// Que  Title Case a Sentence.
// Input:I'm a little tea pot"
// Output: I'm A Little Tea Pot.

let str ="I'm a little tea pot"

let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1)


let capitalizeFWords = (str) => 
str.split(' ').map(capitalizeString).join(' '); // map k lie function chaiye

console.log(capitalizeFWords(str)) 



// var capitalizeFWords = str.split(' ').map(capitalizeString); // map k lie function chaiye
// var capitalizeSentence = capitalizeFWords.join(' ');
// console.log(capitalizeSentence);
