// Write a function that, given a sorted array and a value, determines whether the value is found within the array through 
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or 
// less than a midway point, which is why the given array must be sorted. 
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array


// val = 9
// arr = [1,2,3,5,7,9,10 ,11,13,14,15,56,78]

// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!




function binarySearch(
    sortedNums,
    searchNum,
    leftIdx = 0,
    rightIdx = sortedNums.length - 1
) {
    if (leftIdx > rightIdx) return -1;
    const midIdx = Math.floor((rightIdx + leftIdx) / 2);
    if (sortedNums[midIdx] === searchNum) return midIdx;
    if (searchNum < sortedNums[midIdx]) return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
    return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
}

arr = [1,2,3,5,7,9,10,11,13,14,15,56,78], 5
// [1, 2], -2 ---> -1
// [1, 2], 4 ---> -1
// [1, 2], 1 ---> 0
// [1,2,2], 2 ---> 1
// [], 7 ---> -1
// [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2 ---> 4
// [1, 1, 1, 1, 1], 1 ---> 2
// [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 8 ---> 9
// make sure to test all given scenarios!
// extra challenge: don't use built-in functions such as splice() or slice(),
// with the exception of rounding functions (Math.floor(), Math.ceil())