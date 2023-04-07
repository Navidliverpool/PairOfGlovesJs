function numberOfPairs(gloves) {
    let c = 1;
    var dict = {};
    var holder = 1;
    console.log(gloves)
    for (let i = 0; i < gloves.length; i++) {
        c = 1;
        if (dict)
            for (let j = 0; j < gloves.length; j++) {
                if (gloves[j] == gloves[i]) {
                    c++;
                } else {
                    c = 1;
                }
                dict[gloves[j]] = c;
            }
    }
    console.log("dict: ", dict)
    var r = 0;
    for (var d in dict) {
        if (dict[d] > 1) {
            r += dict[d];
        }
    }
    if (r % 2 != 0) {
        r--;
    }
    r = r / 2;
    return r;
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
numberOfPairs(input)