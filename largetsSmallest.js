// How do you find the largest and smallest number in an array?

let arr = [10, 5, 20, 8, 15];
// Expected Output: Largest = 20, Smallest = 5

let num = arr[0];

for(let i=0; i<arr.length; i++) {

    if(num < arr[i])
    { 
        num = arr[i]; 
    }
    
}

console.log(num);