function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length - 1; i++) { // O(n)
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord("appreciation gratitude thankful"))

//big O Runtime = O(n)
//space complexity= O(1)