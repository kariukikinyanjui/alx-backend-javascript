const request = require('supertest');
const app = require('./api');

describe('GET /available_payments', () => {
  it('should return available payments with correct structure', async () => {
    const response = await request(app).get('/available_payments');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('POST /login', () => {
  it('should return welcome message with correct username', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Betty' });
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Welcome Betty');
  });
});

