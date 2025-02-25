// Basic Questions

// What is an Array in JavaScript?

// An array in JavaScript is a special type of object that can store multiple values in a single variable. It allows you to store and manage a collection of elements (such as numbers, objects, or even other arrays) in an ordered way.

// 1. How do you find the length of an array without using .length?

// let arr = [3,5,6,3,3,3,6];
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     count++
// }

// console.log(count); //result = 7

// 2. How do you manually push an element to the end of an array without using .push()?

// let arr = [ 3, 5, 6, 3, 3, 3, 6 ];
// arr[ arr.length ] = 9;

// console.log( arr );
// result = [ 3, 5, 6, 3, 3, 3, 6, 9 ]

// 3. How do you manually pop an element from the end of an array without using .pop()?

// let arr = [ 3, 5, 6, 3, 3, 3, 6 ];
// arr.length = arr.length-1;
// console.log( arr ); //result = [ 3, 5, 6, 3, 3, 3 ]

// 4. How do you manually insert an element at the beginning of an array without using .unshift()?

// let arr = [5, 6, 3, 3, 3, 6];
// let newElement = 3;

// // Shift elements to the right
// for (let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// // Insert new element at index 0
// arr[0] = newElement;

// console.log(arr);  // Output: [3, 5, 6, 3, 3, 3, 6]

// How do you manually remove the first element from an array without using .shift()?

// let arr = [5, 6, 3, 3, 3, 6];

// // Shift elements to the left
// for (let i = 0; i < arr.length-1; i++) {
//     arr[i] = arr[i + 1];
// }

// arr.length = arr.length-1;

// console.log(arr); //result = [ 6, 3, 3, 3, 6 ]



