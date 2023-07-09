
import express from 'express'
import * as Util from '../utils/helper.js';

var router = express.Router();

router.get('/', async function(req, res, next) {
	console.log("URL:", req.originalUrl)
	
	const response = await Util.getPOLRequest(req.originalUrl, req.headers);
	if (response) {
		let { authHeader, status, data, path } = response;

		if (authHeader) {
			res.header("www-authenticate", authHeader)
		}

		//this replaces the main page with our fast page which just loads the game
		if (path === "/pml/main/index.pml") {
			return res.status(status).send('<pml><head><meta http-equiv="Content-Type" content="text/x-playonline-pml;charset=UTF-8"><title>Fast</title></head><body><timer name="fast" href="gameto:1" enable="1" delay="0"></body></pml>');
		} else {
			return res.status(status).send(data);
		}
	} else {
		return res.send();
	}

});

export default router;