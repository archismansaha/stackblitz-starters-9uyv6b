const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseFloat(req.query.quantity);

  if (isNaN(boughtAt) || isNaN(marketPrice) || isNaN(quantity)) {
    return res.status(400).send('Invalid input');
  }

  const totalReturn = (marketPrice - boughtAt) * quantity;
  res.send(totalReturn.toString());
});

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  if (isNaN(stock1) || isNaN(stock2) || isNaN(stock3) || isNaN(stock4)) {
    return res.status(400).send('Invalid input');
  }

  const totalReturn = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturn.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  if (isNaN(boughtAt) || isNaN(returns)) {
    return res.status(400).send('Invalid input');
  }

  const returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  if (isNaN(stock1) || isNaN(stock2) || isNaN(stock3) || isNaN(stock4)) {
    return res.status(400).send('Invalid input');
  }

  const totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);

  if (isNaN(returnPercentage)) {
    return res.status(400).send('Invalid input');
  }

  const status = returnPercentage > 0 ? 'Profit' : 'Loss';
  res.send(status);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
