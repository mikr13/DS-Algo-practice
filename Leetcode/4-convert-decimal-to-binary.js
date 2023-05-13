const toBinary = (N) => {
    //code here
    return (N >>> 0).toString(2)
}

const decToBinary = (n) => {
    // array to store binary number
    let binaryNum = [];

    while (n > 0) {

        // storing remainder in binary array
        binaryNum.push(n % 2);
        n = Math.floor(n / 2);
    }

    console.log(binaryNum.reverse().join())
}
