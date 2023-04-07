// Not working. I dont understand why.
function numberOfPairs(gloves) {
    let newArr = [];
    let c = 1;
    let index = 0;
    for (i = 0; i < gloves.length; i++) {
        for (j = i; j < gloves.length; j++) {

            if (gloves[j] === gloves[i]) {
                c++;
                console.log(gloves[j])
                gloves = gloves.filter(e => e !== gloves[j]);
            }
        }
        if (c > 1) {
            if (c % 2 != 0) {
                c--;
            }
            newArr[index] = c;
            index++;
            c = 1;
        }
    }
    console.log(newArr)
    finalResult = newArr.reduce((a, b) => a + b, 0)
    return finalResult / 2;
}

let input = [
    'Olive', 'Yellow', 'Aqua', 'Lime', 'Black', 'Gray',
    'Blue', 'Red', 'White', 'Teal', 'Navy', 'Olive',
    'Olive', 'Navy', 'Fuchsia', 'Silver', 'Red', 'Aqua',
    'White', 'Yellow', 'Teal', 'Lime', 'Silver', 'Navy',
    'Maroon', 'Blue', 'Silver', 'Silver', 'Gray', 'Red',
    'Blue', 'Blue', 'Purple', 'Aqua', 'Gray', 'Yellow',
    'Fuchsia', 'Green', 'Navy', 'Teal', 'Blue', 'Olive',
    'Purple', 'White', 'White', 'Red', 'Purple', 'Aqua',
    'Silver', 'Silver', 'Black', 'Red', 'Purple', 'Fuchsia',
    'White', 'Fuchsia', 'Fuchsia', 'Olive', 'White', 'Maroon',
    'Purple', 'Fuchsia', 'Blue', 'Fuchsia', 'Gray', 'Gray',
    'Maroon', 'White', 'Purple', 'Purple', 'Green', 'Yellow',
    'Red', 'Aqua', 'White', 'White', 'Navy', 'Purple',
    'Navy', 'Black', 'Fuchsia', 'Lime', 'Teal', 'Aqua'
];

console.log(numberOfPairs(input))