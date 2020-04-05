// using a hashtable to count individual items

// define a set of items that we want to count
items = [
  "apple",
  "pear",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "pear",
  "banana",
  "orange",
  "apple",
  "kiwi",
  "pear",
  "apple",
  "orange",
];

function counter(dataset) {
  // create a hashtable object to hold the items and counts
  var dictionary = {};
  // loop over each item and add to the hash table
  for (var i = 0; i < dataset.length; i++) {
    var item = dataset[i];
    dictionary[item] = 0;
  }

  // create array of unique values
  var uniqueValues = Object.keys(dictionary);

  // iterate over each item and increment the count for each one
  for (var j = 0; j < uniqueValues.length; j++) {
    var key = uniqueValues[j];
    for (var k = 0; k < dataset.length; k++) {
      var item = dataset[k];
      if (item == key) {
        dictionary[key] += 1;
      }
    }
  }

  return dictionary;
}

// print the results
console.log(counter(items));
