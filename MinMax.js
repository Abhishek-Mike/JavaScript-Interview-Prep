'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *  [1,3,5,7,9] => 1+3+5+7 =10 && 3+5+7+9 =24  ans (10,24)
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort()
    let min = 0
    let max = 0    
    
    arr.forEach((num,i) => {
       if(i == 0) min += num
       else if (i == arr.length-1) max += num
       else {
        min += num
        max += num
       }
    });
    console.log(min,max)
}

// sum = sum + n;
// if (min > n) {
//     min = n;
// }
// if (max < n) {
//     max = n;
// }
// console.log((sum - max) + " " + (sum - min));

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
