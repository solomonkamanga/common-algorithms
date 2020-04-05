// use hash table to filter out duplicate items

// define a set of items that we want to reduce duplicates
var items = [
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

// create a hash table to perform a filter
var filter = {};

// loop over each item and add to the hash table
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  filter[item] = 0;
}

// create an array from the resulting keys in the hash table
var filtered = Object.keys(filter);
console.log(filtered);
