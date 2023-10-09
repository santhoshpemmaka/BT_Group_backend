const express = require('express');

const feedbackController = require('../controller/feebBack');

const router = express.Router();


router.get('/', feedbackController.getallFeedbackController);

router.post('/',feedbackController.postFeedbackController)


module.exports = router;
