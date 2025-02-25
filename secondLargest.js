// Write a function to find the second largest number in an array.

function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    if (uniqueArr.length < 2) return null; // If no second largest exists

    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr[1]; // Return second largest element
}

let arr = [2, 4, 5, 2, 5, 7, 89, 4, 6, 7];
console.log(secondLargest(arr)); // Output: 7
