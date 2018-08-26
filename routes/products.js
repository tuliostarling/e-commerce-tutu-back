'use strict';

const control = require('../controllers/product');
const router = require('express').Router();
const { execute } = require('../controllers/index');


router.get('/listall/',
    execute(control.getList));

router.post('/listone/',
    execute(control.getOne));

router.post('/add/',
    execute(control.insertProduct));



module.exports = router;