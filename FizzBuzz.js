// Print Fizz Buzz.
// Description: Write a program that prints the numbers from
//  1 to 20 and for multiples of 
// '3' print "Fizz"  
// '5' print "Buzz"
// '3' and '5' both print "FizzBuzz"
// else number itself

//modulus costly operation

    // for (let i = 1; i <= 100; i++) {
    //     if(i % 15 == 0)  console.log("FizzBuzz");
    //         else if ( i  % 3 == 0) console.log("Fizz");
    //           else if (i % 5 == 0)   console.log("Buzz");  
    //     else console.log(i);
    // }




// optimised
function fizzBuzz(n) {
    
    let cnt3 = 0;
    let cnt5 = 0;
    
    for (let i = 0; i <= n; i++){
        let str = "";
        
        if (cnt3 === 3) {
            str += 'fizz';
            cnt3 = 0;
        }
        if (cnt5 === 5) {
            str += 'Buzz';
            cnt5 = 0;
        }
        if (str === '') {
            str += i;
        }

        console.log(str);

        cnt3++;
        cnt5++;
    }

}


fizzBuzz(20);