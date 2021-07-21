let {expect} = require('chai');


function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('test', () => {
    it('some test', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
        expect(isOddOrEven(null)).to.equal(undefined);
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
    });

    it('should return even with even string', () => {
        expect(isOddOrEven('some')).to.equal('even');
        expect(isOddOrEven('or')).to.equal('even');
    });

    it('should return odd with odd string', () => {
        expect(isOddOrEven('som')).to.equal('odd');
        expect(isOddOrEven('oro')).to.equal('odd');
    });

})

