const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    //index        0        1       2       3          4
   //             -5       -4      -3       -2        -1

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));    
// expected output: Array ["camel", "duck"] => last element is not included (substring)

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
