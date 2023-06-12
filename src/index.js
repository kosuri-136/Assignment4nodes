const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET 
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// POST 
app.post('/add', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status: 'error', message: 'Invalid data types' });
    return;
  }

  const sum = num1 + num2;

  if (sum < -1000000 || sum > 1000000) {
    res.status(400).json({ status: 'error', message: 'Overflow' });
    return;
  }

  res.status(200).json({ status: 'success', message: 'The sum of given two numbers', sum });
});

// POST 
app.post('/sub', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status: 'error', message: 'Invalid data types' });
    return;
  }

  const difference = num1 - num2;

  if (difference < -1000000 || difference > 1000000) {
    res.status(400).json({ status: 'error', message: 'Overflow' });
    return;
  }

  res.status(200).json({ status: 'success', message: 'The difference of given two numbers', difference });
});

// POST 
app.post('/multiply', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status: 'error', message: 'Invalid data types' });
    return;
  }

  const result = num1 * num2;

  if (result < -1000000 || result > 1000000) {
    res.status(400).json({ status: 'error', message: 'Overflow' });
    return;
  }

  res.status(200).json({ status: 'success', message: 'The product of given numbers', result });
});

// POST 
app.post('/divide', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ status: 'error', message: 'Invalid data types' });
    return;
  }

  if (num2 === 0) {
    res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
    return;
  }

  const result = num1 / num2;

  if (result < -1000000 || result > 1000000) {
    res.status(400).json({ status: 'error', message: 'Overflow' });
    return;
  }

  res.status(200).json({ status: 'success', message: 'The division of given numbers', result });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
