
// var n = 19;
// for(i=2; i < n; i++){
   
//     if(n%i == 0){
//         console.log("Not a Prime");
//         break;
//     }
// }
// console.log("Prime Number")


//function
function isPrime(n){
    for(i=2; i < n; i++){
   
        if(n%i == 0){
            return 'Not a Prime';
        }
    }
    return 'Prime Number';
}
var res = isPrime(127);
console.log(res);