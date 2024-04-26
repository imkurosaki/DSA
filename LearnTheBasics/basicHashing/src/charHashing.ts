

const charHashing = (str: string, find: string[]):void => {
    // total ascii is 256 so you can Array(256) 
    let hash: number[] = Array(26).fill(0);

    for(let i=0; i<str.length; i++) {
        hash[str[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    for(let i=0; i<find.length; i++) {
        console.log(hash[find[i].charCodeAt(0) - "a".charCodeAt(0)]);
    }
}

charHashing("aabbbc", ["a", "b", "c", "z"]);