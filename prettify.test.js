const { expect } = require('@jest/globals');
const prettify = require('./prettify');


describe('Number formats', function () {
  test('12 to be 12', () => {
    expect(prettify(12)).toBe('12');
  });

  test('1,234 to be 1234', () => {
    expect(prettify(1234)).toBe('1234');
  });

  test('-1,234 to be -1234', () => {
    expect(prettify(-1234)).toBe('-1234');
  });

  test('1,000,000 to be 1M', () => {
    expect(prettify(1000000)).toBe('1M');
  });

  test('-1,000,000 to be -1M', () => {
    expect(prettify(-1000000)).toBe('-1M');
  });

  test('1,000,000,000 to be 1B', () => {
    expect(prettify(1000000000)).toBe('1B');
  });

  test('-1,000,000,000 to be -1B', () => {
    expect(prettify(-1000000000)).toBe('-1B');
  });

  test('1,000,000,000,000 to be 1T', () => {
    expect(prettify(1000000000000)).toBe('1T');
  });

  test('-1,000,000,000,000 to be -1T', () => {
    expect(prettify(-1000000000000)).toBe('-1T');
  });

  test('1,123,123,123 to be 1.1B', () => {
    expect(prettify(1123123123)).toBe('1.1B');
  });

  test('12,000,000.234 to be 12M', () => {
    expect(prettify(12000000.234)).toBe('12M');
  });

  test('12,400,000.234 to be 12.4M', () => {
    expect(prettify(12400000.234)).toBe('12.4M');
  });

  test('12,400,000 to be 12.4M', () => {
    expect(prettify(12400000)).toBe('12.4M');
  });

  test('12,400,000,000,000,000 to be 12,400,000,000,000,000', () => {
    expect(prettify(12400000000000000)).toBe('12400000000000000');
  });

  test("Expect 52e8 to be 52M", () => {
    expect(prettify(52e6)).toBe('52M');
  });
})


describe('Data types', function () {
  test('Empty array to be null', () => {
    expect(prettify([])).toBe(null);
  });

  test('Empty object to be null', () => {
    expect(prettify({})).toBe(null);
  });

  test("String 'abc' to be null", () => {
    expect(prettify('abc')).toBe(null);
  });

  test("String '1234' to be null", () => {
    expect(prettify('1234')).toBe(null);
  });

  test("Empty input to be null", () => {
    expect(prettify()).toBe(null);
  });

})