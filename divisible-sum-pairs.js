function divisibleSumPairs(n, k, arr) { 
    let hold = [];
    arr.map((num, index) => {
        for (index += 1; index < arr.length; index++) {
            if ((num + arr[index]) % k == 0) {
                hold.push([num, arr[index]]);
            }
        } 
    });
    return hold.length;
}