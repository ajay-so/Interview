// How do you implement search on a number into a array

let arr = [4,7,4,2,56,7,7,7,7];
let num = 7;
let count = 0;
for(let i=0;i<arr.length;i++){
    if(num === arr[i]){
       count++;  // for check present or not and how many presents
       console.log(i); //this is for print the index of that elements
    }
}

if(count > 0){
    console.log(`present ${count}`);
}else{
    console.log("not present");
}

