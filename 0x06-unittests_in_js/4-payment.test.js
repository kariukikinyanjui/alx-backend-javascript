const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function() {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
