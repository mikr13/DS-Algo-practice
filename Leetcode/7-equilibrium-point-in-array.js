const equilibrium = (arr, n) => {
    sum = 0;
    leftSum = 0;

    for (let i = 0; i < n; ++i)
        sum += arr[i];

    for (let i = 0; i < n; ++i) {
        sum -= arr[i];

        if (leftSum == sum)
            return i;

        leftSum += arr[i];
    }

    return -1;
}
