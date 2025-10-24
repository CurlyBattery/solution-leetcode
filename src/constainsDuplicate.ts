function containsNearbyDuplicates(nums: number[], k: number) {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const prevIndex = map.get(nums[i])!;
            if (i - prevIndex <= k) return true;
        }
        map.set(nums[i], i);
    }

    return false;
}

console.log(containsNearbyDuplicates([1,0,1,1] , 1 ))

