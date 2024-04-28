//problem: https://www.naukri.com/code360/problems/insertion-sort_624381?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const insertionSort = (arr: number[]) => {
    for (let i: number = 1; i < arr.length; i++) {
        for (let j: number = i; j > 0; j--) {
            if (arr[j - 1] < arr[j]) break
            let temp: number = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr)
}

insertionSort([3, 5, 2, 4, 1])
insertionSort([14, 9, 15, 12, 6, 8, 13])