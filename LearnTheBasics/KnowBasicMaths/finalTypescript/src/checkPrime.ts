//problem: https://www.naukri.com/code360/problems/check-prime_624934?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const isPrime = (n: number): boolean => {
    if (n === 1) return false;

    for (let i: number = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const betterSolutionIsPrime = (n: number): boolean => {
    if (n === 1) return false;
    for (let i: number = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(1))

console.log(betterSolutionIsPrime(2))
console.log(betterSolutionIsPrime(4))
console.log(betterSolutionIsPrime(6))
console.log(betterSolutionIsPrime(8))
console.log(betterSolutionIsPrime(9))
console.log(betterSolutionIsPrime(10))
console.log(betterSolutionIsPrime(12))
console.log(betterSolutionIsPrime(14))