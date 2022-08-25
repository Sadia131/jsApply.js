
function arraySum(num){

var sum = 0;
for(var i=0; i<num.length; i++){
    var element = num[i];
    sum = sum + element;
}
return sum;
}

var num = [40, 55, 67, 45, 22, 44, 99];
var total = arraySum(num);
console.log(total);
var res = arraySum([30, 33, 44, 12]);
console.log( res);