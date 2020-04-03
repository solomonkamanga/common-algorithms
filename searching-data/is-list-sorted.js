/**
 *  determine if a list is sorted
 */

// sorted list
items1 = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87];
// unsorted list
items2 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

function bruteIsSorted(dataset) {
  // using the brute force method
  for (var i = 0; i < dataset.length; i++) {
    if (dataset[i] > dataset[i + 1]) {
      return false;
    }
  }

  return true;
}

function isSorted(dataset) {
  // sorted
  let sorted = [...dataset].sort((a, b) => a - b);
  // compare
  let compare = dataset.every((value, index) => value === sorted[index]); 
  return compare ? true : false;
  
}

// brute force
console.log(isSorted(items1));
console.log(isSorted(items2));

// other 
console.log(bruteIsSorted(items1));
console.log(bruteIsSorted(items2));

