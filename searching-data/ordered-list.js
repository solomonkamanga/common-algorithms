/**
 *  - searching for an item in an ordered list
 *  - this technique uses a BINARY SEARCH
 */

// dataset
var items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87];

function binarySearch(item, dataset) {
  // get size of the list
  let size = dataset.length - 1;

  // start at the two ends of the list
  let lowerIndex = 0;
  let upperIndex = size;

  // loop will execute for as long as the two indices do not cross over each other -> value is IN the list
  try {
    while (lowerIndex <= upperIndex) {
      // calculate the middle point
      let middle = Math.floor((lowerIndex + upperIndex) / 2);

      // if item is found return the index
      if (dataset[middle] === item) {
        return middle;
      }

      // otherwise get the next midpoint
      if (item > dataset[middle]) {
        lowerIndex = middle + 1;
      } else {
        upperIndex = middle - 1;
      }
    }
  } catch (error) {}
  
  // if loop exits and two indices have crossed over each other -> value is NOT in the list
  if (lowerIndex > upperIndex) {
    return false;
  }
}

// test
console.log(binarySearch(23, items));
console.log(binarySearch(87, items));
console.log(binarySearch(250, items));
