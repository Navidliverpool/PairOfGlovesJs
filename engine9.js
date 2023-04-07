function numberOfPairs(gloves) {
    let obj = {};
    let c = 0;
    let index;
    let r = [];
    for (let i = 0; i < gloves.length; i++) {
        console.log("inja 1")
        for (let j = i; j < gloves.length; j++) {
            if (gloves[j] == gloves[i]) {
                console.log("inja 2")
                index = gloves.indexOf(gloves[j]);
                if (index > -1) { // only splice array when item is found
                    gloves.splice(index, 1); // 2nd parameter means remove one item only
                }
            }
        }
    }
    if (gloves.length % 2 != 0) {
        gloves.length--;
    }
    gloves.length = gloves.length / 2;
    x
    console.log(gloves.length)
    return gloves.length;
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