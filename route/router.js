const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('pages/main');
});
router.get('/welcome',(req,res)=>{
    res.render('pages/welcome');
});

module.exports = router;