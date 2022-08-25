function oddEven(num){

        var res;
        if(num % 2 == 0){
            res = num;
        }
        else{
            res = num*2;
        }
        return res;
        
    }

var res = oddEven(2);
var square = res*res;
console.log("square", square);

function oddEvenall(nums){
    var oddEven_array = []
        for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var res = oddEven(num)
        oddEven_array.push(res);
    }
    return oddEven_array;
    }

var nums = [10, 19, 3, 56, 22, 12, 11];
var numsEven = oddEvenall(nums);
console.log(numsEven);


friend_age = [19, 33, 28, 26, 24, 25, 18, 78,77,45];