let arr: number[] = [13, 4, 5, 78, 3];

function pivot(arr: number[], start: number = 0, end: number = arr.length): number {
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

function quickSort(arr: number[], left: number = 0, right: number = arr.length): number[] {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


function swap(arr: number[], index1: number, index2: number): void {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    console.log(temp, "temp2");

}

pivot(arr);
console.log(quickSort(arr));








































//






