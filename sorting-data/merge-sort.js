// Implement a merge sort with recursion

var items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

const mergeSort = (dataset) => {
    if (dataset.length <= 1) {
        return dataset;
    }
    // split dataset into 2 arrays
    const middle = Math.floor(dataset.length / 2);
    console.log(middle);

    // left array
    const leftArray = dataset.slice(0, middle);
    console.log(leftArray);

    // right array
    const rightArray = dataset.slice(middle, dataset.length);
    console.log(rightArray);

    // recursively break down the arrays
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// perform merging
const merge = (leftArray, rightArray) => {
    var sortedArray = [];
    // while both arrays have content
    while (leftArray.length || rightArray.length) {
        if (leftArray.length && rightArray.length) {
            if (leftArray[0] < rightArray[0]) {
                sortedArray.push(leftArray.shift())
            } else {
                sortedArray.push(rightArray.shift())
            }
        } else if (leftArray.length) {
            //if the left array still has values add them
            sortedArray.push(leftArray.shift())
        } else {
            //if the right array still has values add them
            sortedArray.push(rightArray.shift())
        }
    }
    return sortedArray;
}

// test
// unsorted
console.log(items);
// sorted
console.log(mergeSort(items));