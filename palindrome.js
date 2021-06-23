const palindrome = (str) => {

    
    console.log(str === str.split('').reverse().join(''));
}
palindrome("kayak")