function isPalindrome(s: string): boolean | void {
    s = s.replace(/[^A-Za-zА-Яа-я0-9]/g, '').toLowerCase();
    const reverse = s.split('').reverse().join('');

    return s === reverse;
}

isPalindrome("A man, a plan, a canal: Panama");