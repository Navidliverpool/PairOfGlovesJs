function toFindDuplicates() {
    let arry = [1, 2, 1, 3, 4, 3, 5];
    let toMap = {};
    let resultToReturn = false;
    let c = 0;
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]]) {
            resultToReturn = true;
            // terminate the loop
            break;
        }

        toMap[arry[i]] = true;
        console.log(arry[i])

    }

    if (resultToReturn) {
        console.log('Duplicate elements exist');
    } else {
        console.log('Duplicates dont exist');
    }
}

toFindDuplicates()