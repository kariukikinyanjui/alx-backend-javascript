const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Login endpoint', function() {
  it('should return correct message for POST /login', function(done) {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'Betty' }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', function() {
  it('should return correct object for GET /available_payments', function(done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

