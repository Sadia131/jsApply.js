const year = 3698;
const remainder = year % 4;
if(remainder == 0){
    console.log("This is a LeapYear..!");
}
else{
    console.log("This is not a LeapYear!!");
}


// function 

function isleapYear(year){

    if((0 == year % 4) && (0 !== year % 100) || (0 == year % 400)){
        return true;
    }
    else{
        return false;
    }
   
}
firstYear = isleapYear(1700);
console.log(firstYear);
  
