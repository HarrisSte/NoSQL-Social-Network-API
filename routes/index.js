const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/apiRoutes', apiRoutes);

router.use((req, res) => {
  res.status(400).send('Error!');
});

module.exports = router;
