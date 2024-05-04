//problem: https://www.naukri.com/code360/problems/merge-sort_5846?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=PROBLEM
//problem: https://leetcode.com/problems/sort-an-array/solutions/4351131/83-timsort-my-first-timsort-implementation/

function sortArray(nums: number[]): number[] | undefined{
    if(nums.length === 1) {
        return nums;
    }
    return mergeSort(nums, 0, nums.length-1);
};

const mergeSort = (arr: number[], low: number, high: number) => {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, high, mid);
    return arr;
} 

const merge = (arr: number[], low: number, high: number, mid: number) => {
    let left = low;
    let right = mid + 1;
    let temp = [];

    while(left <= mid && right <= high) {
        if(arr[left] <=arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right])
            right++
        }
    }
    
    if(left <= mid) {
        for(let i=left; i<=mid; i++) {
            temp.push(arr[i]);
        }
    }

    if(right <= high) {
        for(let i=right; i<=high; i++) {
            temp.push(arr[i])
        }
    }

    for(let i=low; i<=high; i++) {
        arr[i] = temp[i - low];
    }
}

// console.log(mergeSort([2,5,6,1,3,4], 0, 5))
// console.log(mergeSort([2,3,5,1,4], 0, 4))
// console.log(mergeSort([2,5,3,1,4], 0, 4))
// console.log(mergeSort([2,13,4,1,3,6,28], 0, 6))
// console.log(sortArray([9,3,6,2,0]))
console.log(sortArray([5,1,1,2,0,0]))
console.log(sortArray([5,2,3,1]))
console.log(sortArray([0]))
console.log(sortArray([]))
