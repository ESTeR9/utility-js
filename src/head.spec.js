const head = require('./head');

describe('Head', () => {

    it('[1,2,3] should return 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('[] should return null or undefined', () => {
        expect(head([])).toEqual(null || undefined);
    });
})
