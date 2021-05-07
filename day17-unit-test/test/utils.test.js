import { add } from '../src/utils';

describe('Utils', () => {
    describe('add', () => {
        it('should be able to add two numbers', () => {
            const result = add(1, 2);
            expect(result).toBe(3);
        });

        it('should return same number if only one number passed', () => {
            const result = add(1);
            expect(result).toBe(1);
        });

    });
});