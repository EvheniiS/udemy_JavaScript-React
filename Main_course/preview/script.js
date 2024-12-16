'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
        

// const width = box.clientWidth
// const height = box.clientHeight
// const height = box.offsetHeight;
// const width = box.offsetWidth;

const height = box.scrollHeight;
const width = box.scrollWidth;


console.log(width, height)

btn.addEventListener( 'click', () => {
    // box.style.height = box.scrollHeight + 'px'
    console.log(box.scrollTop)
})

console.log(box.getBoundingClientRect().top)


const style = window.getComputedStyle(box);

console.log(style.display)
