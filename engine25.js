// Not working. I dont understand why.
function numberOfPairs(gloves) {
    console.log("gloves:", gloves)
    let c = 1;
    let arr = [];
    let arr2 = [];
    for (i = 0; i < gloves.length - 1; i++) {
        // console.log("gloves[i]:", gloves[i])
        if (!arr2.includes(gloves[i])) {
            arr2.push(gloves[i]);
            for (j = 1; j < gloves.length; j++) {
                // console.log("gloves[j]:", gloves[j])
                // if (!arr2.includes(gloves[i])) {
                // arr2.push(gloves[i]);
                // console.log("arr does not contain:", gloves[i])
                if (gloves[j] === gloves[i]) {
                    // console.log("added gloves[j] to arr:", gloves[j])
                    c++;
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
    }
    console.log(arr)
    console.log(arr2)
    let r = 0;
    for (i = 0; i < arr.length; i++) {
        r += arr[i];
    }
    r = r / 2;
    console.log("r:", r)
    return r;
}

let input = ['red', 'green', 'blue'];

console.log(numberOfPairs(input))