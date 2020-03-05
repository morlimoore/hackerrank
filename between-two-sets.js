function getTotalX(a,b) {
    let arr = [];
    let ans = [];
    
    let inc = b[0] / a[a.length - 1];
    for (let i = 1; i < inc + 1; i++) {
        arr.push(a[a.length - 1] * i);
    }

    for (let digit of arr) {
        let stats = true;
        for (let i of a.concat(b)) {
            if (i < digit) {
                if (digit % i != 0) {
                    stats = false;
                }
            }
            else {
                if (i % digit != 0) {
                    stats = false;
                }
            }
        }
        if (stats == true) {
            ans.push(digit);
        }
    }
    return ans.length;
}