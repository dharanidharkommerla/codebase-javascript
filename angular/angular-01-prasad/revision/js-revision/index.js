console.log(`value of k is ${k}`);
function x() {
  var a = 20;
  if (true) {
    let b = 15;
    console.log(b, a);
    var x = 100;
  }
  //   console.log(a, b); //error
  console.log(x, a);
}

x();
var k = 20;
// callback function
// function in the parameter of another function

function y(a, x) {
  console.log(a, x);
}
y(5, x);

// x --> callback
// y --> higherorder
// if a function returns another function
// the one which is returned --> callback
// the function which returned a function --> higherorder

// Datatypes
// -------------
// Premitive datatypes
// 1. number
// 2. string
// 3. bigint
// 4. symbol
// 5. boolean
// 6. null
// 7. undefined

// difference between null vs undefined

console.log(5 + "4");
console.log(5 + +"4");
console.log(5 - "4");
console.log(5 * "4");
console.log(5 / "4");

a = "dharanidhar";
console.log(typeof a);

// loops
// for loop -- index based
// for of loop -- element based
// for in loop -- index based
// forEach ()

arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i of arr) {
  console.log(i);
}

for (let i in arr) {
  console.log(arr[i]);
}

arr.forEach((ele, index) => {
  console.log(`element is ${ele}::${index}`);
});

// map, filter, reduce
// map -- will create another copy of the array
const p = arr.map((i) => {
  //   console.log(i);
  return i;
});
console.log(p);

// filter

const q = arr.filter((i) => {
  //   console.log(i);
  return i % 2 == 0;
});
console.log(q);
