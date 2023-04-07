// Not working. I dont understand why.
function numberOfPairs(gloves) {
    console.log("gloves:", gloves)
    let findDuplicates = gloves.filter((item, index) => gloves.indexOf(item) !== index)
    console.log("findDuplicates:", findDuplicates)
}
let input = ['gray', 'black', 'purple', 'purple', 'gray', 'black', 'red', 'black', 'black', 'black', 'gray'];
numberOfPairs(input)