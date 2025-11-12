function isPalindrom(x: number): boolean {
    let savedX = x;
    const back = [];

    console.log(x % 10)
    if(isNaN(x % 10)) {
        return true;
    }
    while(x > 0) {
        if(!isNaN(x % 10)) back.push(x % 10);
        x = Math.round(x / 10);
    }
    return savedX === Number(back.join(''));
}

console.log(isPalindrom(8))
