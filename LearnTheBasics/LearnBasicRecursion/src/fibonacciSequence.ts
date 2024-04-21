// problem: https://www.naukri.com/code360/problems/print-fibonacci-series_7421617?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=PROBLEM

const fibonnaciSequence = (n: number): number[] | number => {
    if (n <= 2) return 0;
    return recursionFibonnaciSequence(n, [0, 1]);
}

const recursionFibonnaciSequence = (n: number, arr: number[]): number[] => {
    if (arr.length === n) return arr;

    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    recursionFibonnaciSequence(n, arr);
    return arr;
}

console.log(fibonnaciSequence(0))
console.log(fibonnaciSequence(1))
console.log(fibonnaciSequence(3))
console.log(fibonnaciSequence(5))