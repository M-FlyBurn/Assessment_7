const unique = str => {
    for(let i = 0; i < str.length;i++){
        for( let j = i + 1; j < str.length; j++){
            if(str[i]=== str[j]){
                return false
            }
        }
    }
    return true
}
console.log(unique("Malika"))
console.log(unique("Zora"))
console.log(unique("Nia"))

const uniqueSet = str =>{
    let set = new Set(str.split(''))
    console.log(set)
    
    return set.size === str.length   
}