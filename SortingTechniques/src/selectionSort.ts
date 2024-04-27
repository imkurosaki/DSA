//problem: https://www.naukri.com/code360/problems/selection-sort_624469?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=DISCUSS

const selectionSort = (arr: number[]) => {
    for (let i: number = 0; i < arr.length-1; i++) {
        let min = arr[i];
        for (let j: number = i + 1; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j]
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}

selectionSort([5, 3, 3, 4, 1, 2]);
selectionSort([13,46,24,52,20,9]);
selectionSort([8, 6, 2, 5, 1])