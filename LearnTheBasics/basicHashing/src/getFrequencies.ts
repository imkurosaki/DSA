//problem: https://www.naukri.com/code360/problems/k-most-occurrent-numbers_625382?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const getFrequencies = (arr: number[]) => {
    let hash = new Map<number, number>();
    let MAX_INTEGER = Number.MIN_SAFE_INTEGER;
    let MIN_INTEGER = Number.MAX_SAFE_INTEGER;
    let max = 0;
    let min = 0;

    for(let i=0; i<arr.length; i++) {
        if(!hash.has(arr[i])) {
            hash.set(arr[i], 0)
        }
        hash.set(arr[i], ((hash.get(arr[i]) || 0) * 1) + 1)
    }


    hash.forEach((value: number, key: number) => {
        if(key > MAX_INTEGER) {
            MAX_INTEGER = key;
            max = value;
        } else if(key === MAX_INTEGER && value < max) {
            max = value;
        }

        if(key < MIN_INTEGER) {
            MIN_INTEGER = key;
            min = value;
        } else if(key === MIN_INTEGER && value < min) {
            min = value
        }
    });
    return [max, min];
}


console.log(getFrequencies([1,2,3,1,1,4]))
console.log(getFrequencies([10,10,10,3,3,3]))
