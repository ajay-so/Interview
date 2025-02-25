// Remove duplicates from an array.

let arr = [1,3,5,3,2,3,6,7,4];
console.log(arr);
let newArr = [...new Set(arr)]; //new Set(arr) creates a Set, which stores only unique values (removes duplicates)
console.log(newArr);