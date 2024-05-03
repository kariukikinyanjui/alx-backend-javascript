const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

const paymentMethods = {
  12: ['paypal', 'stripe'],
  15: ['paypal', 'visa'],
  18: ['stripe', 'maestro']
};

// Middleware to validate :id as a number
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Not Found');
  }
  next();
};

app.get('/cart/:id', validateId, (req, res) => {
  const { id } = req.params;
  if (!paymentMethods[id]) {
    return res.status(404).send('Cart not found');
  }
  res.send(`Payment methods for cart ${id}: ${paymentMethods[id].join(', ')}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

