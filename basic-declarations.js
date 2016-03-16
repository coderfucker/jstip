
//
var y, x = y = 1;
console.log('--> 1:', `x = ${x}, y = ${y}`);

//
;(() => {
  var x = y = 2;
  console.log('2.0:', `x = ${x}, y = ${y}`);
})();
console.log('-->2.1:', `x = ${x}, y = ${y}`);

//
;(() => {
  var x, y = 3;
  console.log('3.0:', `x = ${x}, y = ${y}`);
})();
console.log('-->3.1:', `x = ${x}, y = ${y}`);

//
;(() => {
  var y, x = y = 4;
  console.log('4.0:', `x = ${x}, y = ${y}`);
})();
console.log('-->4.1:', `x = ${x}, y = ${y}`);

//
x = 5;
console.log('-->5:', `x = ${x}, y = ${y}`);
