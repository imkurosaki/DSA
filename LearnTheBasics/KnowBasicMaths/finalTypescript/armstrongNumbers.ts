
function armstrongNumbers(input: number): boolean {
    let digits: number = 0;
    let copyInput: number = input;
    let arrayDigits: number[] = [];
    let sum: number = 0;

    while (copyInput !== 0) {
        let lastDigit: number = copyInput % 10;
        copyInput = Math.trunc(copyInput / 10);
        digits++;
        arrayDigits.push(lastDigit);
    }

    for (let i: number = 0; i < digits; i++) {
        sum += Math.pow(arrayDigits[i], digits);
    }

    return sum === input;
}

//better solution
function betterSolution(input: number): boolean {
    let copyInput: number = input;
    let digits: number = 0;
    let sum: number = 0;

    while (copyInput !== 0) {
        digits++;
        copyInput = Math.trunc(copyInput/10);
    }

    copyInput = input;
    while(copyInput !== 0) {
        let firstDigit: number = copyInput % 10;
        sum += Math.pow(firstDigit, digits);
        copyInput = Math.trunc(copyInput/10);
    }
    
    return sum === input;
}

console.log(betterSolution(146));