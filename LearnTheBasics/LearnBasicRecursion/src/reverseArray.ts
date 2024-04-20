// problem: https://www.naukri.com/code360/problems/reverse-an-array_8365444?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const reverseArray = (n: number, arr: number[]): number[] => {
    if (n === Math.floor(arr.length / 2)) return arr;

    let temp: number = arr[arr.length - n];
    arr[arr.length - n] = arr[n - 1];
    arr[n - 1] = temp;
    reverseArray(n - 1, arr);
    return arr;
}

console.log(reverseArray(4, [8,1,3,2]));
console.log(reverseArray(5, [5,7,8,1,6]));
console.log(reverseArray(6, [5,7,8,1,6,3]));