const findMax = require('../lib/findMax').findMax1;

const chai = require('chai');

const expect = chai.expect;

describe.only('Check findMax1 function with three positive values', () => {
  //describe.only('Check findMax1 function with three positive values', () => {
  it('when first is biggest', () => {
    expect(findMax(15, 1, 2)).to.equal(15);
  });
  it('when second is biggest', () => {
    expect(findMax(10, 55, 20)).to.equal(55);
  });
  it('when third is biggest', () => {
    expect(findMax(10, 55, 200)).to.equal(200);
  });
});
