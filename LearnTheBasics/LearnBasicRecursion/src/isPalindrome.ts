// problem: https://www.naukri.com/code360/problems/check-palindrome-recursive_624386?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=PROBLEM

const isPalindrome = (str: string) => {
    return recursion(1, str);
}

const recursion = (count: number, str: string): boolean => {
    const strLength: number = str.length;
    if(count > Math.floor(strLength/2)) return true;

    if(str[strLength - count] !== str[count - 1]) return false;
    recursion(count + 1, str);
    return true;
}


console.log(isPalindrome("abbbba"))
console.log(isPalindrome("abbba"))
console.log(isPalindrome("abcd"))