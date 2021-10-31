function caesar(offset, input) {
    let result = "";

    for(let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        if ((charCode < 65 || charCode > 122) || (charCode > 90 && charCode < 97)) {
            result += s[i]
        } else {
            let newCharCode = charCode + Math.ceil(offset%26);
            if (charCode >= 97 && newCharCode > 122) {
                newCharCode = newCharCode - 122 + 96;
            }
            if (charCode <= 90 && newCharCode > 90) {
                newCharCode = newCharCode - 90 + 64;
            }
            result += String.fromCharCode(newCharCode);
        }
    }
    return result
}

console.log(caesar(3, "abc")) // def
console.log(caesar(2, "alta")) // cnvc
console.log(caesar(10, "alterraacademy")) // kvdobbkkmknowi
console.log(caesar(1, "abcdefghijklmnopqrstuvwxyz")) // bcdefghijklmnopqrstuvwxyza
console.log(caesar(1000, "abcdefghijklmnopqrstuvwxyz")) // mnopqrstuvwxyzabcdefghijkl