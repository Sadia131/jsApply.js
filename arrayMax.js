var marks = [30, 40, 55, 85, 56, 72, 22];
var max = marks[0];
for(var i=0; i< marks.length; i++){
    var element = marks[i];
    if(element> max){
        max = element;
    }
}
console.log("highest value is: ", max);