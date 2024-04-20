//problem: https://www.naukri.com/code360/problems/sum-of-all-divisors_8360720?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const sumOfAllDivisors = (n: number): number => {
    let sum: number = 0;
    
    for(let i:number = 1; i<=n; i++) {
        for(let j:number = 1; j<=i; j++) {
            if(i % j === 0) {
                sum += j;
            }
        }
    }
    return sum;
}

console.log(sumOfAllDivisors(3))
console.log(sumOfAllDivisors(5))
console.log(sumOfAllDivisors(10))