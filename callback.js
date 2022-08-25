function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age);
    // washHand();
    // takeShower();
    task();

}

function washHand(){
    console.log('wash your hand');
}
function takeShower(){
    console.log('Take shower');
}
explain_callback('sabid ahmed', 18, washHand);
explain_callback('Abid ahmed', 20, takeShower);