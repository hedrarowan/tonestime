const router = require('express').Router();
module.exports = router; 

router.use((req, res, next) => {
    res.status(404).send('Not Found')
})