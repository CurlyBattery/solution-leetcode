function minSubArrayLength(target: number, nums: number[]) {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while(currentSum >= target) {
            let currWindow = end - start + 1;

            if(currWindow < minLength) {
                minLength = currWindow;
            }
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;

}

console.log(minSubArrayLength(7, [2,3,1,2,4,3]))