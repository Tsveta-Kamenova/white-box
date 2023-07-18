const checkUser = require('../lib/checkUser').checkUserStatus;

const chai = require('chai');

const expect = chai.expect;

describe.only('Check user', () => {
  //describe.only('Check user', () => {
  it('When user is 85 years old it should be ADULT', () => {
    expect(checkUser(85), 'user when 85 years old').to.equal('ADULT');
  });
  it('When user is 5 years old it should be ADULT', () => {
    expect(checkUser(5), 'user when 5 years old').to.equal('NON-ADULT');
  });
  it('When user is 18 years old it should be ADULT', () => {
    expect(checkUser(18), 'user when 18 years old').to.equal('NON-ADULT');
  });
  it('When user is 19 years old it should be ADULT', () => {
    expect(checkUser(19), 'user when 19 years old').to.equal('ADULT');
  });
});
