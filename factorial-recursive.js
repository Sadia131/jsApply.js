
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1); // n! = n * !(n-1)
    }
}
var res = factorial(5);
console.log(res);

//loop
var factorial = 1;
for(var i = 10; i >= 1; i--){
    factorial = factorial * i;
    console.log(i, factorial);
}


var i = 10;
while(i >= 1){
    i--;
}