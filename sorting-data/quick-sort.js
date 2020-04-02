// Implement a quicksort

items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]


const quickSort = (dataset, start, end) => {
    if (start < end) {
        // calculate the pivot value
        let pivotIndex = partition(dataset, start, end);

        // recursive calls to quickSort in order to sort the two partitions
        quickSort(dataset, start, pivotIndex - 1);
        quickSort(dataset, pivotIndex + 1, end);
    }
}

const partition = (dataset, start, end) => {
    // Set lower to start - 1 so that it can access the start index in the event that the value at dataset[0] is greater than dataset[pivotValue]
    let pivotValue = end;
    let lower = start - 1;
    let upper = start;

    // Increment upper up to the index preceding the pivotValue
    while (upper < pivotValue) {

        // If the value is greater than the pivotValue increment upper
        if (dataset[upper] > dataset[pivotValue]) {
            upper++;
        }

        // When the value at dataset[upper] is less than the pivotValue:
        // increment lower (dataset[lower] will be a value greater than dataset[pivotValue]) and swap the value at dataset[lower] and dataset[upper]
        else {
            lower++;
            swap(dataset, upper, lower);
            upper++;
        }

    }

    // The value at dataset[lower + 1] will be greater than the value of dataset[pivotValue]
    swap(dataset, lower + 1, pivotValue);

    // You return lower + 1, as the values to the left of it are less than dataset[lower+1], and values to the right are greater than dataset[lower + 1]. 
    // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value 
    return lower + 1;
}

const swap = (dataset, firstIndex, secondIndex) => {
    let temp = dataset[firstIndex]
    dataset[firstIndex] = dataset[secondIndex]
    dataset[secondIndex] = temp
}

// test the merge sort with data
console.log(items);
quickSort(items, 0, items.length - 1);
console.log(items);