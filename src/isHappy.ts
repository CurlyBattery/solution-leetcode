function isHappy(n: number) {
    if(n < 10) {
        n = n ** 2;
    }
    let count = 0;
    while(n > 9 && count < 100) {

        let stringNumebr = n.toString();
        n = 0;
        for (let i = 0; i < stringNumebr.length; i++) {
            n += Number(stringNumebr[i]) ** 2;
        }
        console.log(n)
        if(n < 10) {
            n = n ** 2;
        }
        count++;
    }
    return count >= 100 ? false :  n === 1;
}

console.log(isHappy(4))
