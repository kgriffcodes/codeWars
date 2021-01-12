// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  let sumScore = s1 + s2 + s3
  let avScore = (sumScore / 3)

  if (avScore >= 90 && avScore <=100){
    return 'A'
  } else if (avScore >= 80 && avScore < 90){
    return 'B'
  } else if (avScore >= 70 && avScore < 80){
    return 'C'
  } else if (avScore >= 60 && avScore < 70){
    return 'D'
  } else if (avScore >= 0 && avScore < 60){
    return 'F'
  } else {
    return 'false'
  }
}
