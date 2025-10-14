function hIndex(catitions: number[]): number {

    const sort = [...catitions].sort((a, b) => b - a);

    let h = sort[0];
    let hIndex = 0;
    while (h > hIndex) {
        hIndex++;
        h = sort[hIndex];
    }
    return hIndex;
}

console.log(hIndex([1,3,1]))