const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

const sortArr = (arr, n) => {
    let low = 0
    let mid = 0
    let high = n - 1

    while (mid <= high) {
        if (arr[mid] === 0) {
            swap(arr, low, mid)
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            swap(arr, mid, high)
            high--
        }
    }

    return arr;
}
