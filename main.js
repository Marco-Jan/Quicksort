"use strict";
let arr = [2, 45, 6, 8, 43, 4, 2, 63, 49, 67, 68, 78, 4];
function pivot(arr, start = 0, end = arr.length - 1) {
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
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(temp, "temp");
}
pivot(arr);
//
// function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right);
//         quickSort(arr, left, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr;
// }
