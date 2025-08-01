let arr = [0,1,2,2,3,0,4,2] ;
const value = 2;

function removeElement(nums: number[], val: number): number | void {
    while(nums.includes(val)) {
        const indexValue = nums.findIndex((x) => x === val);
        nums.splice(indexValue, 1);
    }
    return nums.length;
};

console.log(removeElement(arr, value))