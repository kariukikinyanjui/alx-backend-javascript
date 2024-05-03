const request = require('supertest');
const app = require('./api');

describe('GET /cart/:id', () => {
  it('should return payment methods for cart with correct status code when :id is a number', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Payment methods for cart 12: paypal, stripe');
  });

  it('should return 404 status code when :id is NOT a number', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.status).toEqual(404);
  });
});

