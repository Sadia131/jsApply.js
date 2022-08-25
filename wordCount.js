var speech = "i  am a good person. i don't snore at    night.";

var count = 0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){  //speech[i-1] for 2 or more space er jnno
        count++;
    }
}
count++;
console.log(count);