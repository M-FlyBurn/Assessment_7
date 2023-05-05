function pangram(string) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
console.log(pangram("I like cats, but not mice"))