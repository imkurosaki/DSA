//problem: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

const check = (nums: number[]): boolean => {
    let pivot: number = 0;

    if(checkIfSorted(nums)) {
        return true;
    }

    for(let i = 1; i<nums.length; i++) {
        if(nums[i-1] > nums[i]) {
            pivot = i;
            break;
        }
    }

    if(pivot === 0) return false;

    let temp: number[] = [];
    for(let i=pivot; i<nums.length; i++) {
        temp.push(nums[i]);
    }

    for(let i=0; i<pivot; i++) {
        temp.push(nums[i]);
    }

    return JSON.stringify(nums.sort((a:number, b:number) => a - b)) === JSON.stringify(temp);
}

const checkIfSorted = (nums: number[]): boolean => {
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] <= nums[i]) {
            continue;
        }
        return false;
    }
    return true;
}


console.log(check([3,4,5,1,2]))
console.log(check([2,1,3,4]))
console.log(check([1,2,3]))
console.log(check([6, 10, 6]))
console.log(check([5,5,6,6,6,9,1,2]))

