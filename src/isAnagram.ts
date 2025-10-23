function isAnagram(s: string, t: string): boolean | void{
    const arrayS = s.split('');
    const arrayT = t.split('');
    let len = arrayS.length;
    let isCount = 0;
    if(arrayS.length !== arrayT.length) return false;
    for (let i = 0; i < len; i++) {
        let last = arrayS.pop() as string;
        console.log(last)
        if(arrayT.includes(last )) {
            isCount++;
        }
        arrayT.splice(arrayT.findIndex((a) => a === last), 1);
    }
    return isCount === len;
}


console.log(isAnagram("anagram", "nagaram"))
