/**
 * Author:    Claira Lind
 * Created:   05.01.202
 *
 * (c) Copyright by Blub Corp.
 **/

function isEven(x){
  return (x % 2 == 0);
 }

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [7, 32, 1, 9, 2002, 100, 40];
console.log("my array", array);

var result = array.map(isEven);
// should return [false, true, false, false, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x) {
  return x ** 0.5;
})
//should return [2.64575, 5.65685, 1, 3, 44.74371, 10, 6.324555]

console.log("Squareroot of array:", result);
