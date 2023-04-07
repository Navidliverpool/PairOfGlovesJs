function numberOfPairs(gloves) {
    let c = 1;
    var dict = {};
    console.log(gloves)
    for (let j = 0; j < gloves.length; j++) {
        // console.log("inja 1")
        if (gloves[j] in dict) {
            if (j == 1) {
                // console.log("seri dovom")
            }
            // console.log("inja 2")
            c++;
            dict[gloves[j]] = c;
            c = 1;
        } else {
            // console.log("inja 3")
            dict[gloves[j]] = "c";
        }
    }
    console.log("dict: ", dict)
    var r = 0;
    for (var d in dict) {
        // console.log("second loop")
        if (dict[d] > 1) {
            // console.log("inja 1")
            r += dict[d];
        }
    }
    if (r % 2 != 0) {
        // console.log("inja 2")
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