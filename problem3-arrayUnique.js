// Array Unique

function ArrayUnique(arrayA, arrayB) {

  for(let i=0; i < arrayA.length; i++){
    for(let j=0; j < arrayB.length; j++){

      if(arrayA[i] === arrayB[j]){ 
        arrayA.splice(i,1);
        i--
      }
    }
  }
 return arrayA;
}

console.log(ArrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16])) // [2 4]
console.log(ArrayUnique([10, 20, 30, 40], [5, 10, 15, 59])) // [20 30 40]
console.log(ArrayUnique([1, 3, 7], [1, 3, 5])) // [7]
console.log(ArrayUnique([3, 8], [2, 8])) // [3]
console.log(ArrayUnique([1, 2, 3], [3, 2, 1])) // []
