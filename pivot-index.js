function pivotIndex(nums){
   let totalSum = nums.reduce((a,b)=>a+b,0);
   let leftSum = 0;

    for(let i = 0;i<nums.length;i++){
        if(leftSum === totalSum - leftSum - nums[i]){
            return i;
        }
        leftSum +=nums[i];
    }
    return -1;
}

const nums = [1,7,3,6,5,6];
console.log("Pivot Index is: ",pivotIndex(nums));
