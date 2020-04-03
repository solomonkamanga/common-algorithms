/**
 *  searching for an item in an unordered list sometimes called a LINEAR SEARCH
 */

 // declare a list of values to operate on
 var items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

 function linearSearch(item, dataset){
     for(let i = 0; i < dataset.length; i++){
         if(item === dataset[i]){
             return i;
         }
     }
     return false;
 }

 console.log(linearSearch(87, items));
 console.log(linearSearch(250, items));