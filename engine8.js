function numberOfPairs(gloves) {
    let obj = {};
    let c = 0;
    let index;
    for (let i = 0; i < gloves.length; i++) {
        console.log("inja 1")
        for (let j = i; j < gloves.length; j++) {
            if (gloves[j] == gloves[i]) {
                console.log("inja 2")
                c++;
                index = gloves.indexOf(gloves[j]);
                if (index > -1) { // only splice array when item is found
                    gloves.splice(index, 1); // 2nd parameter means remove one item only
                }
            }
        }
    }
    if (c % 2 != 0) {
        c--;
    }
    c = c / 2;
    return c;
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