describe('lcdDigits_v1', function () {

    describe('Unit testing', function () {

        describe('buildDigitArray', function () {
            var digit;

            beforeEach(function () {
                digit = 910;

            });

            it('should print digitArray', function () {

                var digitArrays = buildDigitArrays(digit);
                var expectText = ['9', '1', '0'];

                expect(digitArrays).toEqual(expectText);
            })
        });

        describe('buildDigitGrid', function () {
            var digitArrays;
            var allGrid;

            beforeEach(function () {

                digitArrays = ['9', '1', '0'];
                allGrid = loadAllDigits();
            });


            it('should print digitGrid', function () {

                var digitGrids = buildDigitGrids(digitArrays, allGrid);
                var expectText = [
                    {9: ['._.', '|_|', '..|']},
                    {1: ['...', '..|', '..|']},
                    {0: ['._.', '|.|', '|_|']}
                ];

                expect(digitGrids).toEqual(expectText);

            });
        });

        describe('buildFinalPrint', function () {
            var digitGrids;

            beforeEach(function () {

                digitGrids = [
                    {9: ['._.', '|_|', '..|']},
                    {1: ['...', '..|', '..|']},
                    {0: ['._.', '|.|', '|_|']}
                ];
            });


            it('should print final', function () {

                var finalPrint = buildFinalPrint(digitGrids);
                var expectText = '._.' + ' ' + '...' + ' ' + '._.' + ' ' + '\n' +
                    '|_|' + ' ' + '..|' + ' ' + '|.|' + ' ' + '\n' +
                    '..|' + ' ' + '..|' + ' ' + '|_|' + ' ' + '\n';

                expect(finalPrint).toEqual(expectText);

            });
        });
    });

    describe('Integration testing', function () {
        var digit;

        beforeEach(function () {
            digit = 910;

        });

        it('should print correct text', function () {
            spyOn(console, 'log');

            printGrid(digit);

            var expectText = '._.' + ' ' + '...' + ' ' + '._.' + ' ' + '\n' +
                '|_|' + ' ' + '..|' + ' ' + '|.|' + ' ' + '\n' +
                '..|' + ' ' + '..|' + ' ' + '|_|' + ' ' + '\n';


            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});