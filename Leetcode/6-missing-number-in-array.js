const missingNumber = (array, n) => {
    //code here
    const sum = (n * (n + 1)) / 2
    const sumArr = array.reduce((acc, curr) => acc + curr, 0)

    return sum - sumArr
}
