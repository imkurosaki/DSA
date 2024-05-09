//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

//76 ms of runtime
const removeDuplicates = (nums: number[]): number => {
    let expecteddNums = [];
    expecteddNums.push(nums[0]);

    for(let i=0; i<nums.length; i++) {
        if(!expecteddNums.includes(nums[i])) {
            expecteddNums.push(nums[i]);
        }
    }

    for(let i=0; i<expecteddNums.length; i++) {
        nums[i] = expecteddNums[i];
    }

    return expecteddNums.length;
}

//53 ms of runtime
const testing = (nums: number[]) => {
    let k: number = 1;
    
    for(let i=1; i<nums.length; i++) {
        let isExist: boolean = false;
        for(let j=0; j<k; j++) {
            if(nums[j] === nums[i]) {
                isExist = true;
            }
        }
        if(!isExist) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}


console.log(testing([0,0,1,1,1,2,2,3,3,4]))
console.log(testing([1,1,2]))
console.log(testing([1,2,3,3,4]))