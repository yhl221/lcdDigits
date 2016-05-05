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

    allGrid.forEach(function (key) {
        var str = [];
        for (var i = 0; i < digitArray.length; i++)
            str.push(key[digitArray[i]]);
        digitGrid.push(str);
    });

    return digitGrid;
}

function buildFinalPrint(digitGrid) {
    var finalPrint = '';

    digitGrid.forEach(function (key) {
        var str = '';
        for (var i = 0; i < key.length; i++)
            str = str + key[i] + ' ';
        finalPrint = finalPrint + str + '\n';
    });

    return finalPrint;
}