var business = 500;
var minister = 450;
var sochib = 650;

if(business>minister){
    if(business>sochib){
        console.log("Business is bigger");
    }
    else{
        console.log("Sochib is bigger");
    }
}
else{
   if(minister>sochib){
    console.log("Minister is bigger");
   }
   console.log("sochib is bigger");
}


//easy way

var max = Math.max(business, minister,sochib);
console.log(max);