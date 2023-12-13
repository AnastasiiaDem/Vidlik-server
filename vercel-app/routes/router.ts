const router = require('express').Router();
const auth = require('./auth');
const task = require('./task');
const user = require('./user');
import express from 'express';


router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Test endpoint');
});

router.use('/auth/', auth);
router.use('/task/', task);
router.use('/user/', user);


module.exports = router;


