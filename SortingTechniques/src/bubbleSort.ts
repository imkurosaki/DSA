//problem: https://www.naukri.com/code360/problems/bubble-sort_624380?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const bubbleSort = (arr: number[]) => {
    for(let i:number=0; i<arr.length-1; i++) {
        let flag = true;
        for(let j=0; j<arr.length-i; j++) {
            if(arr[j] > arr[j+1]) {
                flag = false;
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
        if(flag) break; //if array already sorted
    }
    console.log(arr)
}

bubbleSort([4,5,2,3,1])
bubbleSort([2,13,4,1,3,6,28])
bubbleSort([9,3,6,2,0,0])
