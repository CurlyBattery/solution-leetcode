"use strict";
function kidsWithCandies(candies, extraCandies) {
    let oldArray = [...candies];
    let maxKidCandies = candies.sort((a, b) => b - a)[0];
    let isBigCandiesArray = [];
    for (let i = 0; i < oldArray.length; i++) {
        if (oldArray[i] + extraCandies >= maxKidCandies) {
            isBigCandiesArray.push(true);
        }
        else {
            isBigCandiesArray.push(false);
        }
    }
    return isBigCandiesArray;
}
kidsWithCandies([12, 1, 12], 10);
