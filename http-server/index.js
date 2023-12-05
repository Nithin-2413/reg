

const express = require('express');
const app = express();
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});


app.post('/registration', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.send('Form submitted successfully!');
});

const port = args.port || 3000;
app.listen(port, () => {
  if (!args.port) {
    console.log(`No port specified, defaulting to port ${port}`);
  }
  console.log(`Server is running on port ${port}`);
});
