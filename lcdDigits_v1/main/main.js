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

    digitArray.forEach(function (key) {
        digitGrid.push(allGrid[key]);
    });

    return digitGrid;
}

function buildFinalPrint(digitGrid) {
    var finalPrint = '';
    
    digitGrid.forEach(function (key) {
        var r = Object.keys(key);
        finalPrint = finalPrint + key[r];
    });

    return finalPrint;
}