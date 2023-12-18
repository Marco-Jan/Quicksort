let arr: number[] = [13, 4, 5, 78, 3, 34];

function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
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

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
 
    if (left < right) {
        let newPivotIndex = pivot(arr, left, right);
        
        quickSort(arr, left, newPivotIndex - 1);
        quickSort(arr, newPivotIndex + 1, right)
    }

    return arr;
}

function swap(arr: number[], index1: number, index2: number): void {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(quickSort(arr));








































//






