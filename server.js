const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from your Node.js app running in Docker!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App is listening on port ${PORT}`);
});
