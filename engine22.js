// Not working. I dont understand why.
function numberOfPairs(gloves) {
    console.log("gloves:", gloves)
    let c = 1;
    let cc = 0;
    for (i = 0; i < gloves.length - 1; i++) {
        console.log("gloves[i]:", gloves[i])
        for (j = 1; j <= gloves.length; j++) {
            console.log("j:", j)
            if (gloves[j] === gloves[i]) {
                c++;
                console.log("gloves[j]:", gloves[j])
                delete gloves[j];
                // gloves = gloves.filter(e => e !== gloves[j]);
                console.log("gloves after filtering:", gloves)
            }
        }
        if (c % 2 != 0) {
            c--;
        }
        console.log("c:", c)
        if (c > 1) {
            cc += c;
        }
        c = 1;
    }
    if (cc <= 1) {
        return 0;
    }
    cc /= 2;
    console.log("cc:", cc)
    return cc;
}

let input = ['gray', 'black', 'purple', 'purple', 'gray', 'black'];

console.log(numberOfPairs(input))