const express = require('express');
const path = require('path');
// const routes = require('./routes');
export const startServer = async () => {
  const app = express();

  app.use(express.json());
  const buildPath = path.join(__dirname, '..', 'build/client');

  console.log(buildPath);
  const port = process.env.PORT || 3000;

  app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
  app.use(express.static(buildPath));
};
