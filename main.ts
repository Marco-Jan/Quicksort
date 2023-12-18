let arr: number[] = [2, 45, 6, 8, 43, 4, 2, 63, 49, 67, 68, 78, 4];

function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
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


function swap(arr: number[], index1: number, index2: number): void {
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





