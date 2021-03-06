'use strict';

const control = require('../controllers/user');
const router = require('express').Router();
const { execute } = require('../controllers');


router.post('/newpass',
    execute(control.newPass));

router.post('/add',
    execute(control.add));

router.post('/addCoupon',
    execute(control.insertCoupon));

router.post('/verifyCoupon',
    execute(control.verifyCoupon));

router.get('/getUserCoupon/:id',
    execute(control.getUserCoupon));

router.put('/put',
    execute(control.update));

router.put('/putAddress',
    execute(control.updateAddress));

router.get('/listone/:id',
    execute(control.getOne));

router.get('/getAllUsers',
    execute(control.getAllUsers));

router.put('/putUserToADM',
    execute(control.updateUserToADM));

router.put('/putUserToNormal',
    execute(control.updateUserToNormal));

router.get('/purchases/:id',
    execute(control.getPurchases));

router.get('/getPurchase/:id',
    execute(control.getOnePurchase));

module.exports = router;
