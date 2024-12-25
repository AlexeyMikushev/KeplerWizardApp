const express = require('express');
const cors = require('cors');
const mockData = require('./db/data.json');

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
  }),
);
app.use(express.json());

app.get('/about-you', (req, res) => {
  res.json(mockData['about-you']);
});
app.get('/favorite-number', (req, res) => {
  res.json(mockData['favorite-number']);
});
app.get('/email', (req, res) => {
  res.json(mockData.email);
});
app.get('/superpowers', (req, res) => {
  res.json(mockData.superpowers);
});

app.post('/name', (req, res) => {
  const {name} = req.body;
  if (name) {
    res.json({message: `Name saved -  ${name}!`});
  }
});
app.post('/favorite-number', (req, res) => {
  const {number} = req.body;
  if (number) {
    res.json({message: `Favorite number saved -  ${number}!`});
  }
});
app.post('/email', (req, res) => {
  const {email} = req.body;
  if (email) {
    res.json({message: `Email saved - ${email}!`});
  }
});
app.post('/superpowers', (req, res) => {
  const {superpowers} = req.body;
  if (superpowers) {
    res.json({message: `${superpowers?.length} superpowers saved!`});
  }
});

app.listen(PORT, () => {
  console.log(`Mock Server is running on port ${PORT}`);
});
