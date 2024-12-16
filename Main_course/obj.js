"use strict";

const options = {
    name: 'Test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'Black',
        bg: "Red"
    },
    makeTest: function() {
        console.log("Test");
    }
}

// const { border, bg } = options.colors;

// console.log('Parent Object: colors');
// console.log('Border:', border);
// console.log('Background:', bg);

// console.log(Object.keys(options).length)
// console.log(options['colors']['border'])
// delete options.name
let counter = 0 ;
for (let key in options) {
    if (typeof(options[key]) == 'object') {

        for (let i in options[key]) {
        console.log(`Key ${i}, has value ${options[key][i]}`)
        counter++
        }
    } else {
        console.log(`Key ${key}, has value ${options[key]}`)
        counter++
    }}
console.log(counter)




