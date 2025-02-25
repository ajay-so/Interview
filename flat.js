// let str = "this is a string";

// console.log(str);
// const newArr = str.split(" ");
// console.log(newArr);
// const result = newArr.map(el => {
//     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
// }).join(" ");

// console.log(result);

const arr = [[1,2],[37,6],[5,6]];

// console.log(arr.flat());

let result = [];
for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++)
    result[result.length] = arr[i][j];
}

console.log(result); //[1,2,37,6,5,6]













