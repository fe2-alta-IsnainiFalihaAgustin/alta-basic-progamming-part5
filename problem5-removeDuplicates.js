function RemoveDuplicates(array) {

  let hapus = [... new Set(array)]
  return hapus.length
}

console.log(RemoveDuplicates([2, 3, 3, 3, 6, 9, 9])) // 4
console.log(RemoveDuplicates([2, 3, 4, 5, 6, 9, 9])) // 6
console.log(RemoveDuplicates([2, 2, 2, 11]))         // 2
console.log(RemoveDuplicates([2, 2, 2, 11]))         // 2
console.log(RemoveDuplicates([1, 2, 3, 11, 11]))     // 4