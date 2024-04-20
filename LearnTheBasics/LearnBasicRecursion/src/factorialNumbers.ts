// problem: https://www.naukri.com/code360/problems/factorial-numbers-not-greater-than-n_8365435?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const factorialNumber = (count: number, n: number, arr: number[]) => {
    if(n === 1) return arr;

    let sum: number = 1;
    if(count > n) return;

    for(let i: number = 1; i < count; i++) {
        sum = sum * (count - i);
    }
    sum = sum * count;

    if(sum > n) return;

    arr.push(sum);
    factorialNumber(count + 1, n, arr)
    return arr;
}

const betterSolutionfactorialNumber = (n: number, arr: number[], count: number = 1, factorial: number = 1): number[] => {
    
    if(factorial > n) return arr;
    
    arr.push(factorial);
    count++;
    factorial *= count;
    betterSolutionfactorialNumber(n, arr, count, factorial);
    return arr;
}

const callingFactorialNumber = (n: number) => {
    // return factorialNumber(2, n, [1]);
    return betterSolutionfactorialNumber(n, [])
}

console.log(callingFactorialNumber(1))
console.log(callingFactorialNumber(2))
console.log(callingFactorialNumber(7))
console.log(callingFactorialNumber(24))
