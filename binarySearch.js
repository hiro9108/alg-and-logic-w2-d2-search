// Group member name: Hiro, INAE, Michaela

// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 29, 27, 26]

const binarySearch = function(arr, target) {
 
    // Sort value.
    arr.sort((a, b) => a - b);

    let left = 0; // first index of array
    let right = arr.length - 1; // last index of array

    let count = 0;

    while(left <= right) {
        // Calculate middle value of sorted array.
        middle = Math.floor((left + right) / 2);
    
        if(arr[middle] === target) {
            index = middle;
            count++
            return `target=${target} index=${index} count=${count}` ;
        } else if (arr[middle] < target) {
            left = middle + 1;
            count++
        } else {
            right = middle - 1;
            count++
        }
    }
};




console.log(binarySearch(testArray, 19));
console.log(binarySearch(testArray, 12));
console.log(binarySearch(testArray, 26));