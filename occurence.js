// How do you count the occurrences of each element in an array?

let arr = [1, 2, 2, 3, 3, 3, 4, 4];
let result = {};

for (let i = 0; i < arr.length; i++) {
  let num = arr[i]; // Get current number
  
  if (result[num]) {
    result[num]++; // Increment count if already exists
  } else {
    result[num] = 1; // Initialize count if not exists
  }
}

console.log(result); // Output: {1: 1, 2: 2, 3: 3, 4: 1}
