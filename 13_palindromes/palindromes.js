const palindromes = function (str) {
    let cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("")
    return reversed === cleaned
};

// Do not edit below this line
module.exports = palindromes;
