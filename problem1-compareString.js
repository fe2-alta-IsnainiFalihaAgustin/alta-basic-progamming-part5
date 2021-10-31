function Compare(a, b) {
    if(a.match(b)) {
        result = a.match(b)[0]
    } else if (b.match(a)) {
        result = b.match(a)[0]
    } else {
        result = "Not Found"
    }
    return result
}

console.log(Compare("AKA", "AKASHI"))     // AKA
console.log(Compare("KANGOORO", "KANG"))  // KANG
console.log(Compare("KI", "KIJANG"))      // KI
console.log(Compare("KUPU-KUPU", "KUPU")) // KUPU
console.log(Compare("ILALANG", "ILA"))    // ILA
