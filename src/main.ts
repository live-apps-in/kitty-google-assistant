import express from 'express';
import cors from 'cors';

import app from './intents/index';
const server = express();

///Configure Server
server.use(express.json());
server.use(cors());

///Listen for Google Assistant Events
server.post('/fulfillment', app);

server.get('/', (req, res) => {
	res.send({
		app: 'kitty chan Google Assistant',
		port: 5006
	})
})

////Start Express Server
server.listen(5000, () => {
	console.log('Listening on port 5000');
});