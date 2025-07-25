let nums1 = [1,2,3,0,0,0];
let nums2 =[2,5,6];

function advancedMerge(nums1: number[], m: number, nums2: number[], n: number): void {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            if(nums1[i] !== 0) {
                result.push(nums1[i]);
            }
            i++;
        } else {
            if(nums2[j] !== 0) {
                result.push(nums2[j]);
            }
            j++;
        }
    }
    nums1.slice(i).forEach((l) => {
        result.push(l)
    } )
    nums2.slice(j).forEach((r) => {
        result.push(r)
    } )
    nums1 = result;
}
advancedMerge(nums1, 3, nums2, 3);


