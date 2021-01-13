// Complete the solution so that it reverses the string passed into it.

function solution(str){
  //split the string into an array
  //reverse the array order
  //rejoin the letters in the array into a string
  let newString = str.split("").reverse().join("");
  return newString;
  console.log(newString);
}
