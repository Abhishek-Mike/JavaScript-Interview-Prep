var mergeSort = function(array) {
    if (array.length === 1) {
      return array
    } else {
      var split = Math.floor(array.length/2)
      var left = array.slice(0, split)
      var right = array.slice(split)
  
      left = mergeSort(left)
      right = mergeSort(right)
  
      var sorted = []
      while (left.length > 0 || right.length > 0) {
        if (right.length === 0 || left[0] <= right[0]) {
          sorted.push(left.shift())
        } else {
          sorted.push(right.shift())
        }
      }
  
      return sorted
    }
  };
  
  // ### Tests:
   console.log(mergeSort([3,6,9,2]))
  // console.log(mergeSort([1000,12,124,12,45,578,11,3,6,9,100,50,9,12,1,34]))
  // console.log(mergeSort([3,6,9,11,123,111]))