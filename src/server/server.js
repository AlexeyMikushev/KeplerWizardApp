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

app.post('/name', (req, res) => {
  const {name} = req.body;
  if (name) {
    res.json({message: `Name saved -  ${name}!`});
  }
});
app.post('/email', (req, res) => {
  const {email} = req.body;
  if (email) {
    res.json({message: `Email saved - ${email}!`});
  }
});

app.listen(PORT, () => {
  console.log(`Mock Server is running on port ${PORT}`);
});
