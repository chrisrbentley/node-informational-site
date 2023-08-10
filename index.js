/* const http = require('http');
const url = require('url');
const fs = require('fs');

http
	.createServer((req, res) => {
		const parsedUrl = url.parse(req.url, true);
		const path = parsedUrl.pathname;
		console.log(path);

		const filename = `${path}`;
		console.log('filename is ' + filename);

		if (filename === '/') {
			fs.readFile('./index.html', (err, data) => {
				if (err) {
					res.writeHead(404, { 'Content-Type': 'text/html' });
					return res.end('404 Not Found');
				}
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				return res.end();
			});
		} else {
			fs.readFile(`.${filename}.html`, (err, data) => {
				if (err) {
					fs.readFile('./404.html', (err, data) => {
						res.writeHead(200, { 'Content-Type': 'text/html' });
						res.write(data);
					});
				}

				// Send a response
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				return res.end();
			});
		}
	})
	.listen(8080);
 */
