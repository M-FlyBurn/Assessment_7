
let array = [1, 10, -13, 23, 11, 7, 13]

let value = false;
for (let i = 0; i < array.length; i++) {  // O(n)
  for (let j = 0; j < array.length; j++) { // O(n)
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)

//big O Runtime = O (n^2)
//space complexity= O(1)