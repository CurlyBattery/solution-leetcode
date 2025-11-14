function map(arr: number[], fn: (n: number, i?: number) => number): number[] {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i]);
    }

    return arr;
}

const newArr = map([1,2,3], (n) => n + 1);
console.log(newArr);
