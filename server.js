import express from "express";

import wildcard from './src/endpoints/wildcard.js';

const serverPort = 51304;
const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use('*', wildcard);

app.listen(serverPort, () => {
	console.log(`POL Proxy is running on port ${serverPort}`);
});

console.log("OK")