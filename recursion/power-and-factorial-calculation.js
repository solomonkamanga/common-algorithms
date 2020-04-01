// Using recursion to implement power and factorial functions

// power
function power(num, pwr){
    if(pwr === 0){
        return 1;
    } else{
        return num * power(num, pwr - 1);
    }
}
// factorial
function factorial(num){
    if(num === 0){
        return 1;
    } else{
        return num * factorial(num - 1);
    }
}

// power test 1
var num1 = 5;
var num2 = 3;
console.log(+num1+" to the power of "+num2+" is: ", power(num1, num2));

// power test 2
var num1 = 1;
var num2 = 5;
console.log(+num1+" to the power of "+num2+" is: ", power(num1, num2));

// factorial test 1
var fNum = 4;
console.log(+fNum+"! is ", factorial(fNum));

// factorial test 2
var fNum = 0;
console.log(+fNum+"! is ", factorial(fNum));