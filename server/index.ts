import { Request, Response } from 'express';
import routes from '../controllers';

const express = require('express');
const cors = require('cors');
const path = require('path');
const buildPath = path.join(process.cwd(), 'build', 'client');
export const startServer = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  const port = process.env.PORT || 3000;

  app.use(express.static(buildPath));
  app.use(routes);

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(buildPath, '/index.html'));
  });

  app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
};
