import {expect} from 'chai';
import {removedDigits} from '../src/util2';

describe('util2', () => {
    it('test removedDigits', () => {
        expect(removedDigits('010-123-3333')).to.be.equal('--');
        expect(removedDigits('93/05/30')).to.be.equal('//');
    });
});
