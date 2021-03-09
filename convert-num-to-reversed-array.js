// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
  //separate number into array
  let arr = Array.from(String(n), Number);
  //reverse that array
   let reversed = arr.reverse();
  //return reversedArr
   return reversed
}
