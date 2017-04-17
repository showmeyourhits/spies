const path = require('path');
const express = require('express');
const http = require('http');

const port = process.env.PORT || 13579;

console.log(process.argv);
console.log(`STARTING APP ON PORT ${port}`);

const app = express();
const server = http.Server(app);
app.use(express.static(path.resolve('build'), {
	dotfiles: 'allow',
}));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('build/index.html'));
})

server.listen(port);