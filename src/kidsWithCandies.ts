function kidsWithCandies(candies: number[], extraCandies: number): boolean[] | void {
    let oldArray: number[] = [...candies];
    let maxKidCandies: number = candies.sort((a, b) => b - a)[0];
    let isBigCandiesArray: boolean[] = []

    for (let i = 0; i < oldArray.length; i++) {
        if(oldArray[i] + extraCandies >= maxKidCandies) {
            isBigCandiesArray.push(true)
        }else {
            isBigCandiesArray.push(false)
        }
    }

    return isBigCandiesArray;
}

kidsWithCandies([12,1,12], 10)