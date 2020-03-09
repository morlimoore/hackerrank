function breakingRecords(scores) {
    let base = scores[0];
    let lowArr = [];
    let highArr = [];
    for (let num of scores) {
        if (num < base) {
            if (!lowArr.includes(num)) {
                if (num < Math.min(...lowArr)) {
                    lowArr.push(num);
                }
            }
        }
        else if (num > base) {
            if (!highArr.includes(num)) {
                if (num > Math.max(...highArr)) {
                    highArr.push(num);
                }
            }
        }
    }
    return ([highArr.length,lowArr.length]);
}