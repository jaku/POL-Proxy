
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

		if (path === "/pml/main/index.pml") {
			return res.status(status).render("ff11-index.ejs");
		} else if (path === "/pml/game/ff11/index.pml?SC=0&PF=WIN" ) {
			return res.status(status).render("ff11-index.ejs");
		} else if (path === "/pml/game/ff11/index.pml?SC=1&PF=WIN" ) {
			return res.status(status).render("ff11-index.ejs");
		} else {
			return res.status(status).send(data);
		}
	} else {
		return res.send();
	}


});



export default router;