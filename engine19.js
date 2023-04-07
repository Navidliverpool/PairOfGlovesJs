// Not working. I dont understand why.
function numberOfPairs(gloves) {
    let newArr = [];
    let c = 1;
    let holder;
    let obj = {};
    for (i = 0; i < gloves.length - 1; i++) {
        holder = gloves[i];
        for (j = 1; j < gloves.length - 2; j++) {
            if (gloves[j] === gloves[i]) {
                c++;
                console.log("gloves[i]:", gloves[i])
                gloves = gloves.filter(e => e !== gloves[j]);
            }
        }
        if (c > 1) {
            if (c % 2 != 0) {
                c--;
            }
            console.log("c:", c)
            obj = {
                // NOKTASH INJA BOOD. BAYAD GLOVES[I] RO KE KEY HASTESH MIZASHTAM BEYNE BRAKETS. EX. [gloves[i]] 
                [gloves[i]]: c
            };
            newArr.push(obj);
        }
        c = 1;
    }
    console.log("newArr:", newArr)
    finalResult = newArr.reduce((a, b) => a + b, 0)
    console.log("finalResult:", finalResult)
    return finalResult / 2;
}

let input = [
    'Olive', 'Yellow', 'Aqua', 'Lime', 'Black', 'Gray',
    'Blue', 'Red', 'White', 'Teal', 'Navy', 'Olive',
    'Red', 'Aqua', 'White', 'White', 'Navy', 'Purple'
];

console.log(numberOfPairs(input))