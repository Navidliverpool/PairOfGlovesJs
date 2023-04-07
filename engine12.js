function numberOfPairs(gloves) {
    // array of objects. ex. [{blue, 6}, {red, 5}]
    let newArr = [];
    let resultArr = [];
    let c = 1;
    let index = 0;
    let val;
    for (i = 0; i < gloves.length; i++) {
        for (j = i; j < gloves.length; j++) {
            if (gloves[j] === gloves[i]) {
                c++;
            }
            if (j == gloves.length - 1) {
                if (c % 2 != 0) {
                    c--;
                }
                if (c > 1) {
                    val = gloves[i];
                    c /= 2;
                    newArr.push({ val: c })
                    resultArr[index] = newArr.map(a => a.val);
                    index++;
                }

                c = 0;
            }
            // Once I got the count of gloves[j] I need to add the count to newArr then remove them. 
            const removeIndex = gloves.indexOf(j);
            if (removeIndex > -1) { // only splice array when item is found
                gloves.splice(removeIndex, 1); // 2nd parameter means remove one item only
            }
        }
    }
    console.log(newArr)
    let finalResult = 0;
    for (k = 0; k < resultArr.length; k++) {
        finalResult += resultArr[k];
    }
    return finalResult;
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