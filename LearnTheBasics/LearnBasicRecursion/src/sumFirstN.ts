// problem: https://www.naukri.com/code360/problems/sum-of-first-n-numbers_8876068?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const sumFirstN =  (n: number, sum: number = 0): number => {
    if(n > 0) {
        sum +=  n;
        return sumFirstN(n-1, sum);
    }
    return sum;
}

const betterSolutionSumFirstN = (n: number) => {
    return n * (n + 1) / 2;
}
 
console.log(sumFirstN(3));
console.log(sumFirstN(5));