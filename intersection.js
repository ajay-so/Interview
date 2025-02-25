// Find the intersection of two arrays.

let arr1 = [1, 4, 3, 5, 8, 655, 3];
let arr2 = [2, 4, 5, 7, 4, 3];

let intersection = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) { // Start from 0
        if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]); // Store the common element
        }
    }
}

console.log(intersection); // Output: [4, 3, 5]
