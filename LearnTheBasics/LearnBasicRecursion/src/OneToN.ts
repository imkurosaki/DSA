
const oneToN = (n: number): number[] => {
    let arr: number[] = [];
    recursionFunction(n, arr)
    return arr;
}

const recursionFunction = (n: number, arr: number[]): void => {
    if(n < 1) return;
    arr[n-1] = n;
    recursionFunction(n - 1, arr);    
}

console.log(oneToN(5))
console.log(oneToN(2))
console.log(oneToN(10))
