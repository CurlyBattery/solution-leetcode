function createCounter(n: number): () => number {
    let newN = n;
    return function() {
        return newN++;
    }
}

const counter = createCounter(5);
console.log(counter())
console.log(counter())
console.log(counter())