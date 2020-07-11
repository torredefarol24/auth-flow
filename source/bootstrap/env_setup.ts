import path from 'path';
import * as dotENV from 'dotenv';

export const ENV_SETUP = () => dotENV.config({
	path: path.join(__dirname + "/../../", ".env"),
});