function isSubsequence(s: string, t: string): boolean {
    let n = [];
    let currentS = 0;
    for (let i = 0; i < t.length; i++) {
        if(t[i] === s[currentS]) {
            n.push(t[i]);
            currentS++;
        }
    }
    return n.join('') === s;
}

console.log(isSubsequence('axc', 'ahbxdc'))