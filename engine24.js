// Not working. I dont understand why.
function numberOfPairs(gloves) {
    console.log("gloves:", gloves)
    let c = 1;
    let cc = 0;
    let arr = [];
    for (i = 0; i < gloves.length - 1; i++) {
        console.log("gloves[i]:", gloves[i])
        for (j = 1; j <= gloves.length; j++) {
            // console.log("j:", j)
            if (!arr.includes(gloves[j])) {

                if (gloves[j] === gloves[i]) {
                    c++;
                    // j++;
                    // console.log("gloves[j]:", gloves[j])
                    // console.log("gloves after filtering:", gloves)
                }
            }
        }
        if (c % 2 != 0) {
            c--;
        }
        console.log("c:", c)
        if (c > 1) {
            arr.push(c);
        }
        c = 1;
    }
    // if (cc <= 1) {
    //     return 0;
    // }
    // console.log("cc:", cc)
    let r;
    for (i = 0; i < arr.length - 1; i++) {
        r += arr[i];
    }
    return r / 2;
}

let input = ['gray', 'black', 'purple', 'purple', 'gray', 'black'];

console.log(numberOfPairs(input))