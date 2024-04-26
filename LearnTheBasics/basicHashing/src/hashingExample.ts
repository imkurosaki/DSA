

const main = (inputArr: number[], findArr: number[]): void => {
    let hash: number[] = Array(10).fill(0);

    for(let i:number = 0; i<inputArr.length; i++) {
        hash[inputArr[i]] += 1;
    }

    for(let i:number = 0; i<findArr.length; i++) {
        console.log(hash[findArr[i]])
    }
}

main([1,3,2,1,3], [1,2,3,4,5]);