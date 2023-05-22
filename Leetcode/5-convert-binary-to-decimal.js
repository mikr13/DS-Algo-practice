
const toDecimal = (str) => {
    // write your code here
    const revStr = str.split('').reverse().join('')
    let i = 0;
    let dec = 0;
    while (i < revStr.length) {
        dec += Math.pow(2, i) * revStr[i]
        i++
    }

    return dec
}

console.log(toDecimal('100010'))
