const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given array? 

// tinyArray Results: for the tinyArray- insert 38.846 μs, append 105.527 μs
// smallArray Results: for the smallArray- insert 106.759 μs, append 146.878 μs
// mediumArray Results: for the mediumArray- insert 307.271 μs, append 240.194 μs
// largeArray Results: for the largeArray- insert 11.180019 ms, append 3.155384 ms
// extraLargeArray Results: for the extraLargeArray-insert 1.141925283 s, append 43.688206 ms

// The pattern I am able to observe is that from the tinyArray to the extraLargeArray, the amount of time that is it takes both the doublerAppend and doublerInsert function increase each time the array gets bigger. The unshift() method in doublerInsert method changes the array by adding new elements to the start of the array and writes on top of the orignal array. The doubleAppend function uses the push method and adds new elements to the end of the array, which makes the array longer, then returns the new length. 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
