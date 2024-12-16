"use strict";

const arr = [1, 26, 13, 6, 8];
arr.sort(compareNum);
console.log(arr)

function compareNum(a, b){
    return a - b;
}

// arr[99] = 0;

// console.log(arr.length)

//? ForEach is used most of the times if we need work with whole Array/Object  
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`)
// })

// arr.pop(); // delete last element
// arr.push(10) // Push element to the end of array

// console.log(arr)

// for (let i = 0; i < arr.length; i++) { 
//     console.log(arr[i]);
// }

//? user "for of" when need to use "continue" or "brake" functionality 
//? (In case if we need to skip some elements )
// for (let value of arr) {
//     console.log(value)
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));