describe('lcdDigits_v1', function () {

    describe('Unit testing', function () {

        describe('buildDigitArray', function () {
            var digit;

            beforeEach(function () {
                digit = 910;

            });

            it('shoudl print digitArray', function () {

                var digitArray = buildDigitArray(digit);
                var expectText = ['9', '1', '0'];

                expect(digitArray).toEqual(expectText);
            })
        });

        describe('buildDigitGrid', function () {
            var digitArray;
            var allGrid;

            beforeEach(function () {

                digitArray = ['9', '1', '0'];
                allGrid = loadAllDigits();
            });


            it('should print digitGrid', function () {

                var digitGrid = buildDigitGrid(digitArray, allGrid);
                var expectText = [
                    ['._.', '...', '._.'],
                    ['|_|', '..|', '|.|'],
                    ['..|', '..|', '|_|']
                ];

                expect(digitGrid).toEqual(expectText);

            });
        });

        describe('buildFinalPrint', function () {
            var digitGrid;

            beforeEach(function () {

                digitGrid = [
                    ['._.', '...', '._.'],
                    ['|_|', '..|', '|.|'],
                    ['..|', '..|', '|_|']
                ];
            });


            it('should print final', function () {

                var finalPrint = buildFinalPrint(digitGrid);
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