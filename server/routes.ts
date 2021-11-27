import { Request, Response, Router } from 'express';
const router = Router();

router.get('/lol', (req: Request, res: Response) => {
  console.log(req.url);
  res.sendFile('/home/doug/bananophone/build/client/index.html');
});
module.exports = router;
