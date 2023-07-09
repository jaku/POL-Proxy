
import fetch from "node-fetch";
import {Headers} from 'node-fetch';

const host = "202.67.54.55"; //wh000.pol.com

let cacheHeaders = {};

async function getPOLRequest(path, orgHeaders) {
	let headers;
	if (!orgHeaders['user-agent'].includes("PlayOnline")) {
		headers = new Headers(cacheHeaders[path]);
	} else {
		headers = new Headers(orgHeaders);
		cacheHeaders[path] = headers;
	}
	
	const response = await fetch(`http://${host}:51304${path}`, {method: 'GET', headers});

	let data, authHeader;
	try {
		data = await response.text();
		authHeader = response.headers.get('www-authenticate') || false;
	} catch (e) {
		return;
	};
	
	return({status: response.status, authHeader, data, path});
}

export { getPOLRequest };