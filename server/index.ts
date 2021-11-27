import { Request, Response } from 'express';
import { resolve } from 'path';

const express = require('express');
const path = require('path');
const buildPath = path.join(process.cwd(), 'build', 'client');
// const routes = require('./routes');
export const startServer = async () => {
  const app = express();

  app.use(express.json());

  console.log(buildPath);
  const port = process.env.PORT || 3000;

  app.use(express.static(buildPath));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(buildPath, '/index.html'));
  });

  app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
};
