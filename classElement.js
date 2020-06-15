//create element
const ele = document.createElement('div')
// Add a class to an element

ele.classList.add('class-name');

// add muiltiple classes - not supported by IE 11

ele.classList.add('another', 'class', 'name');

console.log(ele.classList)

// Remove a class from an element

ele.classList.remove('class-name');


ele.classList.remove('another', 'class', 'name');
console.log(ele.classList)
// Toggle a class
ele.classList.toggle('class-name');
console.log(ele.classList)