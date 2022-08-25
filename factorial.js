// Factorial with For Loop
var factorial = 1;
for(i=1; i<=10; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}

// //Function

function factorial(n){
    var fact = 1;
for(i=1; i<=n; i++){
    fact = fact * i;
}
    return fact;
}
var result = factorial(10);
console.log(result);

// //While loop

var i = 1;
var factorial = 1;
while(i<=10){
    factorial = factorial * i;
    //console.log(i, factorial);
    i++;
}
console.log(factorial);


//function
function factorial(n){
    var i = 1;
    var fact = 1;
    while(i<=n){
        fact = fact * i;
        //console.log(i, factorial);
        i++;
    } 
    return fact;
}
var result = factorial(10);
console.log(result);