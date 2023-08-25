// Good Luck 💪🏾
function findLargestNumbers(arrays) {
    // create an empty array to store the largest numbers
    let largest = [];
    // loop through the arrays
    for (let array of arrays) {
      // find the maximum number in the array
      let max = Math.max(...array);
      // push it to the largest array
      largest.push(max);
    }
    // return the largest array
    return largest;
  }
console.log(findLargestNumbers([[7, 3, 8, 11], [54, 12, 43, 77], [16, 11, 8]]))  
console.log(findLargestNumbers([[22, 55, 12], [45, 66, 95], [22, 5, 11]])) //➞ [55, 95, 22])