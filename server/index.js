import { join } from 'path';
import express from 'express';

import { SERVER_PORT } from './config';
import init from './init';

const app = express();

app.use(init());

app.listen(SERVER_PORT, () => console.log('Started...'));
