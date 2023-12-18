"use strict";
let arr = [13, 4, 5, 78, 3];
function pivot(arr, start = 0, end = arr.length) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(temp, "temp2");
}
pivot(arr);
console.log(quickSort(arr));
//
//# sourceMappingURL=main.js.map