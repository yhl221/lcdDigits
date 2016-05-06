function printGrid(digit) {

    var allGrids = loadAllDigits();
    var digitArrays = buildDigitArrays(digit);
    var digitGrids = buildDigitGrids(digitArrays, allGrids);
    var finalPrint = buildFinalPrint(digitGrids);

    console.log(finalPrint);
}

function buildDigitArrays(digit) {

    var digitString = digit.toString();
    var digitArrays = digitString.split("");

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
        var string = '';
        digitGrids.forEach(function (element) {

            var key = Object.keys(element);
            string = string + element[key][i] + ' ';
        });

        finalPrint = finalPrint + string + '\n';
    }

    return finalPrint;
}