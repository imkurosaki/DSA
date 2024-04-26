
const mapCharCount = (str: string, findString: string[]) => {
    const hashMap = new Map<string, number>();

    for(let i=0; i<str.length; i++) {
        if(hashMap.get(str[i]) === undefined) {
            hashMap.set(str[i], 1)
        } else {
            //@ts-ignore
            hashMap.set(str[i], hashMap.get(str[i])+1);    
        }
    }
    
    for(let i=0; i<findString.length; i++) {
        console.log(hashMap.get(findString[i]))
    }
}

console.log(mapCharCount("caabbb", ["a", "b", "c"]))