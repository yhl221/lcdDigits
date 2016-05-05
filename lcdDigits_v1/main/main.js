function printGrid(digit) {

    var allGrid = loadAllDigits();
    var digitArray = buildDigitArray(digit);
    var digitGrid = buildDigitGrid(digitArray, allGrid);
    var finalPrint = buildFinalPrint(digitGrid);
    console.log(finalPrint);
}

function buildDigitArray(digit) {
    var digitArray = [];

    var digitString = digit.toString();
    for (var i = 0; i < digitString.length; i++)
        digitArray.push(digitString.charAt(i));

    return digitArray;
}

function buildDigitGrid(digitArray, allGrid) {
    var digitGrid = [];

    digitArray.forEach(function (elem) {
        for (var i = 0; i < allGrid.length; i++) {
            var key = Object.keys(allGrid[i]);
            if (elem === key[0])
                digitGrid.push(allGrid[key]);
        }
    });

    return digitGrid;
}


function buildFinalPrint(digitGrid) {
    var finalPrint = '';

    for (var i = 0; i < 3; i++) {
        var str = '';
        digitGrid.forEach(function (elem) {
            var key = Object.keys(elem);
            str = str + elem[key][i] + ' ';
        });
        finalPrint = finalPrint + str + '\n';
    }

    return finalPrint;
}