<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Nary and Node.js app!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening on port ${port}`);
});
=======
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from your Node.js app running in Docker!');
});
<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Nary and Node.js app!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening on port ${port}`);
});
=======
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from your Node.js app running in Docker!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> 0b3797f (Add express server)
