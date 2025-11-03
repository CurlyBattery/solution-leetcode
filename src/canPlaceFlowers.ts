function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let newN = n;
    if(n > 0) {
        if(flowerbed.length === 1) {
            if(flowerbed[0] === 0) {
                return true
            } else {
                return false
            }
        }
    }
    let i = 1;
    while(i <= n) {
        console.log(i)
        for (let j = 0; j < flowerbed.length; j++) {
            if(flowerbed[j] === 0 && newN > 0) {
                if(j === 0) {
                    if(flowerbed[j+1] === 0) {
                        flowerbed.splice(j, 1, 1);
                        newN--;
                    }
                }
                else if(j === flowerbed.length - 1) {
                    if(flowerbed[j-1] === 0) {
                        flowerbed.splice(j, 1, 1);
                        newN--;
                    }
                } else {
                    if(flowerbed[j-1] === 0 && flowerbed[j+1] === 0) {
                        flowerbed.splice(j, 1, 1);
                        newN--;
                    }
                }
            }
        }
        console.log(flowerbed)
        i++;
    }
    return newN === 0;
}


console.log(canPlaceFlowers([0,0,1,0,0], 1));
