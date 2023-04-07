// This fuction works. It passed all tests. Written by myself.
// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/solutions/javascript
function numberOfPairs(gloves) {
    console.log("gloves:", gloves)
    let c = 1;
    let arr = [];
    let arr2 = [];
    for (i = 0; i < gloves.length - 1; i++) {
        console.log("gloves[i]:", gloves[i])
        if (!arr2.includes(gloves[i])) {
            arr2.push(gloves[i]);
            for (j = i + 1; j < gloves.length; j++) {
                console.log("gloves[j] befor:", gloves[j])
                if (gloves[j] === gloves[i]) {
                    console.log("gloves[j] after:", gloves[j])
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