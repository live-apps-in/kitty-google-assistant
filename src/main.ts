import express from 'express';
import cors from 'cors';

import app from './intents/index';
const server = express();

///Configure Server
server.use(express.json());
server.use(cors());

///Listen for Google Assistant Events
server.post('/fulfillment', app);

////Start Express Server
server.listen(5000, () => {
	console.log('Listening on port 5000');
});