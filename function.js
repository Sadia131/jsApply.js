function oddEvenall(nums){
        //console.log(num*2);
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
        
        if(num % 2 == 0){
            console.log(num, ': is even number');
        }
        else{
            console.log(num*2, ':is odd number')
        }
    }
    
    }   
    
    // function oddEvenall(nums){
    //     for (let i = 0; i < nums.length; i++) {
    //         const num = nums[i];
    //         oddEven(num);
    //     }
        
    // }

nums = [10, 19, 3, 56, 22, 12, 11];

oddEvenall(nums);

// for(let i=0; i<nums.length; i++){
//     const num = nums[i];
    //console.log(num*2);
    // if(num % 2 == 0){
    //     console.log(num, ': is even number');
    // }
    // else{
    //     console.log(num, ':is odd number')
    // }
//     oddEven(num);

// }

friend_age = [19, 33, 28, 26, 24, 25, 18, 78,77,45];
// for (let i = 0; i < friend_age.length; i++) {
//     const age = friend_age[i];
    // if(age % 2 == 0){
    //     console.log(age, ': is even number');
    // }
    // else{
    //     console.log(age, ': is even number');
    // }
//     oddEven(age);
// }
oddEvenall(friend_age);