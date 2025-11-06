function validParenthes(s: string): boolean  {
    let isValid = true;
    for (let i = 0; i < s.length; i++) {
        let idxSecond: number;
        switch (s[i]) {
            case '(':
                idxSecond = s.indexOf(')');
                s = s.substring(0, idxSecond) + s.substring(idxSecond + 1);
                if(idxSecond === -1) {
                    isValid = false;
                }
                break;
            case '{':
                idxSecond = s.indexOf('}');
                console.log(idxSecond)
                s = s.substring(0, idxSecond) + s.substring(idxSecond + 1);
                console.log(s)
                if(idxSecond === -1) {
                    isValid = false;
                }
                break;
            case '[':
                idxSecond = s.indexOf(']');
                s = s.substring(0, idxSecond) + s.substring(idxSecond + 1);
                if(idxSecond === -1) {
                    isValid = false;
                }
                break;
            case ']':
            case '}':
            case ')':
                isValid = false;
                break;
        }
    }

    return isValid;
}


console.log(validParenthes("({[}])"));
