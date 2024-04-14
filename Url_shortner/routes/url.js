const express = require('express');
const router = express.Router();
const {handleGenerateShortID,handleRedirectUrl} = require("../controllers/url")

router.post('/',handleGenerateShortID);
router.get('/:shortId',handleRedirectUrl);

module.exports = router;