const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/', (_req, res) => {
	fs.readFile('./index.html', (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end('404 Not Found');
		}
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
});

app.get('/about', (_req, res) => {
	fs.readFile('./about.html', (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end('404 Not Found');
		}
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
});

app.get('/contact', (_req, res) => {
	fs.readFile('./contact.html', (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end('404 Not Found');
		}
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
});

app.use((_req, res, _next) => {
	res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
