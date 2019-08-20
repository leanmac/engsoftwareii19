const soma = require('./soma');

test('Test soma 5 + 5', () => {
    expect(soma(5,5)).toBe(10);
});
