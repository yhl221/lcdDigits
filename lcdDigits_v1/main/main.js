function printGrid(digit) {

    var allGrids = loadAllDigits();
    var digitArrays = buildDigitArrays(digit);
    var digitGrids = buildDigitGrids(digitArrays, allGrids);
    var finalPrint = buildFinalPrint(digitGrids);
    console.log(finalPrint);
}

function buildDigitArrays(digit) {
    var digitArrays = [];

    var digitString = digit.toString();
    for (var i = 0; i < digitString.length; i++)
        digitArrays.push(digitString.charAt(i));

    return digitArrays;
}

function buildDigitGrids(digitArrays, allGrids) {
    var digitGrids = [];

    digitArrays.forEach(function (elem) {
        for (var i = 0; i < allGrids.length; i++) {
            var key = Object.keys(allGrids[i]);
            if (elem === key[0])
                digitGrids.push(allGrids[key]);
        }
    });

    return digitGrids;
}
function getLength(digitGrid) {

    var key = Object.keys(digitGrid);

    return digitGrid[key].length;
}

function buildFinalPrint(digitGrids) {
    var finalPrint = '';

    var length = getLength(digitGrids[0]);
    for (var i = 0; i < length; i++) {
        var str = '';
        digitGrids.forEach(function (elem) {
            var key = Object.keys(elem);
            str = str + elem[key][i] + ' ';
        });
        finalPrint = finalPrint + str + '\n';
    }

    return finalPrint;
}