// Write a JavaScript program to compute the union of two arrays using push pop
// without using extra space.
// Input arr1= [1, 2, 3]
// arr2= [100, 2, 1,10]

//splice(start, deleteCount, item1)

const arr1 = [1,2,3]
const arr2 = [100,2,1,10]

// Output : [1,2,3,100,10] ------------Target array

     Array.prototype.push.apply(arr1,arr2);  // merging two array
    // const mergedArray = [...arr1,...arr2]   // using spread operator
    // const mergedArray1 = arr1.concat(arr2)
     console.log(arr1);  
    // console.log(mergedArray);
     //console.log(mergedArray1);

// arr1 = [1, 2, 3, 100, 2, 1, 10]
 arr1.splice(4,2)   

// 4 is index at which element is to be removed
// 2 is count of the elements to be eliminated from the series
// if Ques was to add or replace add 3rd argument to add/replace accordingly
console.log(arr1); 

