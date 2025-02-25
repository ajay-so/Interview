// Find the missing number in an array of 1 to N.

function findMissingNumber(arr, N) {
    let expectedSum = (N * (N + 1)) / 2; // Sum of first N numbers
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of array elements
    return expectedSum - actualSum; // Missing number
}

let arr = [1, 2, 4, 5, 6]; // Missing number is 3
let N = 6; // The range is from 1 to 6
console.log(findMissingNumber(arr, N)); // Output: 3
