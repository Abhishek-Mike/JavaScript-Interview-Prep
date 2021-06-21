// FreeCodeCamp Question:
// Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // Only change code below this line
  return arr.indexOf(elem) >=0 ? true : false;
    // Only change code above this line

    // Alternate  Solution
    // if (arr.indexOf(elem) >= 0) {
    //   return true;
    // }
    // return false;
  }
  
  console.log(quickCheck(["England", "Italy", "Portugal","Germany"], "France"));