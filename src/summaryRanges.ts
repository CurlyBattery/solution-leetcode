function summaryRanges(nums: number[]): string[] | void  {
    let sumRangesArray: string[] = [];

    let i = 0;
    let j = 0;
    while(i < nums.length) {
        let newArray = [];
        newArray.push(nums[i]);
        console.log(nums.includes(nums[j] + 1) && j < nums.length)
        while(nums.includes(nums[j] + 1) && j < nums.length) {
            newArray.push(nums[j] + 1);
            j++;
            i++;
        }
      if(nums.includes(nums[j] + 1)) {
          j = 0;
      } else {
          j++;
      }
      if(newArray.length > 1) {
          sumRangesArray.push(`${newArray[0]}->${newArray[newArray.length-1]}`);
      }else {
          sumRangesArray.push((newArray).toString());
      }
        i++;
    }

    return sumRangesArray;
}

summaryRanges([0, 2, 3, 4, 6, 8, 9]);
