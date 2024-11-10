const express = require('express');
const Account = require('../Model/account');

const router = express.Router();

router.post('/createAccount', async (req, res) => {
    const data = req.body;
    const account = new Account(data);
    const reponse = await account.save();
    console.log(reponse);
    
    res.send(reponse);
})

router.get('/checkLogin', async (req, res) => {
    const data = req.query;
    const account = await Account.findOne(data);
    res.status(200).send({
        messenger: 'success',
        account: account,
    })
})

module.exports = router;

module.exports = router;
