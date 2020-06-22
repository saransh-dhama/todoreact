const express = require('express');

const router = express.Router();

router.post('/api/user/signout', async (req, res) => {
	req.session = null;

	res.send({});
});

exports.signOutUserRouter = router;
