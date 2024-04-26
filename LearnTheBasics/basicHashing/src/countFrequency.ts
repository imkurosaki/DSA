//problem: https://www.naukri.com/code360/problems/count-frequency-in-a-range_8365446?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const countFrequency = (n: number, x: number, arr: number[]): number[] => {
    const hashNumber: Map<number, number> = new Map<number, number>();

    for(let i=0; i<arr.length; i++) {
        if(hashNumber.get(arr[i]) === undefined) {
            hashNumber.set(arr[i], 1);
        } else {
            // @ts-ignore
            hashNumber.set(arr[i], hashNumber.get(arr[i]) + 1);
        }
    }

    let frequencyArr = new Array(n).fill(0);
    for(let i=0; i<n; i++) {
        if(hashNumber.get(i + 1) !== undefined) {
            frequencyArr[i] = hashNumber.get(i + 1) || 0;
        }
    } 
    return frequencyArr;
}

console.log(countFrequency(6, 9, [1,3,1,9,2,7]));
console.log(countFrequency(6, 4, [1,3,4,3,4,1]));
console.log(countFrequency(5, 5, [1,2,3,4,5]));
