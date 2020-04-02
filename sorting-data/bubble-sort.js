// bubble sort algorithm

function bubbleSort(dataset) {
    // examine every element and then decrease by 1 
    for (let i = dataset.length - 1; i > 0; i--) {
        // compare neighbouring elements and swap them if needed
        for (let j = 0; j < i; j++) {
            // comparisons
            if (dataset[j] > dataset[j + 1]) {
                let temp = dataset[j];
                dataset[j] = dataset[j + 1];
                dataset[j + 1] = temp;
            }
        }
        // display the array on each iteration
        console.log(dataset);
    }
}

// main function

(function () {
    // list of numbers
    var list = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];
    // function call to bubble sort function
    bubbleSort(list);
    // print out sorted list
    console.log("Result: " + list);
})();