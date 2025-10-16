console.log(twoSum([2,7,11,15] , 9));

function twoSum(numbers: number[], target: number): number[] | void {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
        if(numbers[left] + numbers[right] < target) {
            left++;
        } else if(numbers[left] + numbers[right] > target) {
            right--;
        } else {
            break;
        }
    }
    return [left + 1, right + 1]
}