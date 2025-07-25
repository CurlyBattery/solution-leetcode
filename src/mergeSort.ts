let nums = [4, 56, 23, 1, 2, 54, 9];

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);

    // разбиваем массив на два до тех пор, пока не останется одного элемента в массиве
    let leftHalf= arr.slice(0, middle);
    let rightHalf= arr.slice(middle);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    // функция, которая объединяет подмассивы в отсортированном виде
    return merge(sortedLeft, sortedRight)
}

function merge(left: number[], right: number[]) {
    let result: number[] = []
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    left.slice(i).forEach((l) => {
        result.push(l)
    } )
    right.slice(j).forEach((r) => {
        result.push(r)
    } )
    return result;

}

console.log(mergeSort(nums));
