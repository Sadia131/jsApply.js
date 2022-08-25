var id = [10, 20, 11, 23, 48, 11, 48, 33, 98, 44];
var uniqueId = [];
for(var i=0; i< id.length; i++){
    var element = id[i];
     var index = uniqueId.indexOf(element);
     if(index == -1){
        uniqueId.push(element);
     }
}
console.log(uniqueId);
