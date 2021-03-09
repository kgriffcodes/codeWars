// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  //get every integer from 1 to num
  let sum = 0
  for (let i=0; i<=num; i++){
  //sum those numbers
    sum = (sum + i)
  }
  //return the sum of all numbers
  return sum
}
