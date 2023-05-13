const areRotations = (s1, s2) => {
    // code here
    if (s1.length != s2.length) return 0

    if (`${s1}${s1}`.indexOf(s2) === -1) return 0
    else return 1
}
