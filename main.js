"use strict";
let arr = [13, 4, 5, 78, 3, 34];
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let newPivotIndex = pivot(arr, left, right);
        quickSort(arr, left, newPivotIndex - 1);
        quickSort(arr, newPivotIndex + 1, right);
    }
    return arr;
}
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
console.log(quickSort(arr));
//
//# sourceMappingURL=main.js.map