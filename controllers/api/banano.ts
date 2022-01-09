import { RequestHandler, Router } from 'express';
import bunyan from 'bunyan';
import config from '../../config';

const bananojs = require('@bananocoin/bananojs');
bananojs.setBananodeApiUrl(config.banano.bananodeUrl);
const logger = bunyan.createLogger({ name: '/api/banano' });
const router = Router({ mergeParams: true });

interface BananoParts {
  banano: string;
  banoshi: string;
  raw: string;
}
// middleware to validate incoming banano addresses
const validateAddress: RequestHandler = async (req, res, next) => {
  try {
    const address = String(req.query.address);
    const isValid: {
      message: string;
      valid: boolean;
    } = await bananojs.getBananoAccountValidationInfo(address);
    logger.info({
      method: 'validateAddress',
      address,
      message: isValid.message
    });
    if (!isValid.valid) {
      return res.status(400).json({
        success: false,
        message: isValid.message
      });
    }
    next();
  } catch (error: any) {
    logger.error(error);
    return res.status(400).json({
      success: false,
      message:
        error && error.message
          ? error.message
          : 'unexpected error validating address'
    });
  }
};

const doGetAccountInfo: RequestHandler = async (req, res) => {
  logger.info({ method: 'doGetAccountInfo', query: req.query });
  try {
    const address = String(req.query.address);
    const accountInfo = await bananojs.getAccountInfo(address);
    return res.json({ success: true, data: accountInfo });
  } catch (error: any) {
    logger.error(error);
    return res.status(400).json({
      success: false,
      message: error && error.message ? error.message : 'invalid request'
    });
  }
};

const doGetAccountBalance: RequestHandler = async (req, res) => {
  logger.info({ method: 'doGetAccountBalance', query: req.query });
  try {
    const address = String(req.query.address);
    const balanceRaw: string = await bananojs.getAccountBalanceRaw(address);
    const parts: BananoParts = bananojs.getBananoPartsFromRaw(balanceRaw);
    const data = {
      long: Number(parts.banano) + Number(parts.banoshi) / 100,
      balanceRaw,
      ...parts
    };
    return res.json({ success: true, data });
  } catch (error: any) {
    logger.error(error);
    return res.status(400).json({
      success: false,
      message: error && error.message ? error.message : 'invalid request'
    });
  }
};

router.route('/info').get(validateAddress, doGetAccountInfo);
router.route('/balance').get(validateAddress, doGetAccountBalance);

export default router;
