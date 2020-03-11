function birthday(s, d, m) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        sum += s[i];
        let j = 1;
        while (j < m) {
            sum += s[i + j];
            j++;
        }
        if (sum == d) {
            let j = 0;
            let arr = [];
            while (j < m) {
                arr.push(s[i + j]);
                j++;
            }
            answer.push(arr);
        }
    }
    return (answer.length);
}