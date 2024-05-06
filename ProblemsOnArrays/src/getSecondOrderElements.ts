//problem: https://www.naukri.com/code360/problems/ninja-and-the-second-order-elements_6581960?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=PROBLEM

const getSecondOrderElements = (n: number, arr: number[]) => {
    let min = arr[0]
    let max = arr[0]
    let minSecond = 0;
    let maxSecond = 0;

    for(let i=1; i<n; i++) {
        if(arr[i] < min) {
            minSecond = min;
            min = arr[i];
        }
        else if(arr[i] > max) {
            maxSecond = max;
            max = arr[i]
        }
    }

    if(min === arr[0]) {
        min = arr[1];

        for(let i=0; i<n; i++) {
            if(arr[i] < min) {
                minSecond = min;
                min = arr[i]
            }
        }
    }

    if(max === arr[0]) {
        max = arr[1];

        for(let i=0; i<n; i++) {
            if(arr[i] > max) {
                maxSecond = max;
                max = arr[i]
            }
        }
    }

    return [maxSecond, minSecond];
}

console.log(getSecondOrderElements(5, [1,2,3,4,5]))
console.log(getSecondOrderElements(4, [3,4,5,2]))
console.log(getSecondOrderElements(5, [4,5,3,6,7]))
console.log(getSecondOrderElements(5, [5,4,3,2,1]))
console.log(getSecondOrderElements(4, [5,4,3,2]))