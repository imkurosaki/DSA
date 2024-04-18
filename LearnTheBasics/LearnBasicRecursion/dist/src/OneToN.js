"use strict";
const oneToN = (n) => {
    let arr = [];
    recursionFunction(n, arr);
    return arr;
};
const recursionFunction = (n, arr) => {
    if (n < 1)
        return;
    arr[n - 1] = n;
    recursionFunction(n - 1, arr);
};
console.log(oneToN(5));
console.log(oneToN(2));
console.log(oneToN(10));
