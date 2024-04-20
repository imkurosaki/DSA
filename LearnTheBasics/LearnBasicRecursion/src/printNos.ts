// problem: https://www.naukri.com/code360/problems/n-to-1-without-loop_8357243?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const printNosIncreasing = (n: number, arr: number[]): void => {
    if(n > 0) {
        arr[n-1] = n;
        printNosIncreasing(n-1, arr)
        return;
    }    
}

const printNosDecresing = (n: number, arr: number[]): void => {
    if(n > 0) {
        arr.push(n);
        printNosDecresing(n-1, arr);
        return;
    }
}

const callingFunction = (n: number) =>  {
    let arrNumbers: number[] = [];
    // printNosIncreasing(n, arrNumbers)
    printNosDecresing(n, arrNumbers)
    return arrNumbers;
}

console.log(callingFunction(5));
