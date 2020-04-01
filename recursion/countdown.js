// Use recursion to implement a countdown counter
function countDown(x){
    if(x === 0){
        console.log("Done!");
    } else{
        console.log(x, "...");
        countDown(x - 1);
    }
}
countDown(5);