const tail = require('./tail');

describe('Tail', () => {

    it('[1,2,3] should return 1', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('[1] should return []', () => {
        expect(tail([1])).toEqual([]);
    });

    it('[] should return null or undefined', () => {
        expect(tail([])).toEqual([]);
    });

})
