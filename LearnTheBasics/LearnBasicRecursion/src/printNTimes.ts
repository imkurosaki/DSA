// https://www.naukri.com/code360/problems/print-1-to-n_628290?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const printNtimes = (n: number): string[] => {
    if(n === 0) return [];
    console.log("Coding Ninjas");
    return printNtimes(n - 1);
}

printNtimes(4)
printNtimes(5)