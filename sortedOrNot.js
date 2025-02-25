// How do you check if an array is sorted in ascending order?

let arr = [1, 2, 4, 5, 6, 7];
let isSorted = true; // Assume the array is sorted initially

for (let i = 1; i < arr.length; i++) { // Start from index 1
  if (arr[i] < arr[i - 1]) { // If current element is smaller than previous
    isSorted = false;
    break; // No need to check further
  }
}

if (isSorted) {
  console.log("Sorted");
} else {
  console.log("Not Sorted");
}
