function loop(x: number[], i: number) {
    if(i >= x.length) {
        return;
    }
    console.log(x[i]);

    loop(x, i + 1)
}

const numbers = [1,2,3,4,5];
let i = 0;

loop(numbers, i);