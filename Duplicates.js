// Remove duplicates from an array.

let arr = [1,3,5,3,2,3,6,7,4];
// console.log(arr);
// let newArr = [...new Set(arr)]; //new Set(arr) creates a Set, which stores only unique values (removes duplicates)
// console.log("unique array",newArr);

let uniqueArr = [];
for(let num of arr){
    if(!uniqueArr.includes(num)){
        uniqueArr.push(num);
    }
}
console.log("unique array",uniqueArr);

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log("sorted array",arr);
