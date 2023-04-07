// My code. Inspired from Kata solution results. Not working.
function numberOfPairs(gloves) {
    function x(arr, v) {
        let c = 1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == v) {
                c++;
            }
        }
        if (c % 2 != 0) {
            c--;
        }
        return c / 2;
    }
    let a = x(gloves, 'Red');
    let b = x(gloves, 'Green');
    let c = x(gloves, 'Blue');
    let d = x(gloves, 'Gray');
    let e = x(gloves, 'Black');
    let f = x(gloves, 'Purple');
    let g = x(gloves, 'Lime');
    let h = x(gloves, 'Silver');
    let i = x(gloves, 'Maroon');
    let j = x(gloves, 'Navy');
    let k = x(gloves, 'Teal');
    let l = x(gloves, 'White');
    let m = x(gloves, 'Aqua');
    let n = x(gloves, 'Fuchsia');
    let o = x(gloves, 'Olive');
    let p = x(gloves, 'Yellow');
    let aa = x(gloves, 'red');
    let bb = x(gloves, 'green');
    let cc = x(gloves, 'blue');
    let dd = x(gloves, 'gray');
    let ee = x(gloves, 'black');
    let ff = x(gloves, 'purple');
    let gg = x(gloves, 'lime');
    let hh = x(gloves, 'silver');
    let ii = x(gloves, 'maroon');
    let jj = x(gloves, 'navy');
    let kk = x(gloves, 'teal');
    let ll = x(gloves, 'white');
    let mm = x(gloves, 'aqua');
    let nn = x(gloves, 'fuchsia');
    let oo = x(gloves, 'olive');
    let pp = x(gloves, 'yellow');
    return a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + aa + bb + cc + dd + ee + ff + gg + hh + ii + jj + kk + ll + mm + nn + oo + pp
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