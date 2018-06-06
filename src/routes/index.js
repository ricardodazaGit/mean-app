const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('Mean-rixi-app');
});

module.exports = router;