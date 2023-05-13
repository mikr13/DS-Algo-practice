const reverseInGroups = (arr, n, k) => {
    // code here
    for (let i = 0; i < n; i += k) {
        let left = i;

        // To handle case when k is not
        // multiple of n
        let right = Math.min(i + k - 1, n - 1);
        let temp;

        // Reverse the sub-array [left, right]
        while (left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }
}
