type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCountTwo(init: number): Counter {
    let newN = init;
    const increment = function () {
        return ++newN;
    }
    const decrement = function () {
        return --newN;
    }
    const reset = function () {
        newN = init;
        return newN;
    }

    return {
        increment,
        decrement,
        reset,
    }
}

const counterTwo = createCountTwo(5);
console.log(counterTwo.increment());
console.log(counterTwo.reset());
console.log(counterTwo.decrement());
