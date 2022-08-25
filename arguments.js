function addNumbers(num1, num2){
    //console.log(arguments[2]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum+num;
    }
        return sum;
    
}

var result = addNumbers( 4, 2, 8);
console.log(result);

 