// function fib(num) {
//     console.log(num)
//     console.log(`Fibonacci series is : ${num} `)
//     if( num < 2){
//         return num
//     } else {
//         return fib(num-1) * fib(num-2)
//     }
// }

// console.log(fib(5))


const fibonacci = num => {
    console.log(num)
    if(num < 2) {
      return num
    }
    // recursion here
    return fibonacci(num - 1) + fibonacci(num - 2)
  }

  console.log(fibonacci(5))