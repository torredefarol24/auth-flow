import mongoose from 'mongoose';
import { ENV_SETUP } from './env_setup'
ENV_SETUP()

export class DBConnection {

	private DB_URL: string;
	private connectionOpts: any;
	private mongoose: any

	constructor() {
		this.DB_URL = `${process.env.MONGO_URL}`;
		this.connectionOpts = {
			useCreateIndex: true,
                  useNewUrlParser: true,
			useUnifiedTopology : true,
			useFindAndModify : false
		}
		this.mongoose = mongoose;
	}

	private connectCB = () => console.info(`Mongo Connection OK`);
	private errorCB = (err: any) => console.error(`Mongo Connection Error : ${err}`);

	public connectToDB = () => {
		this.mongoose.connect(this.DB_URL, this.connectionOpts)
			.then(this.connectCB)
			.catch((err: any) => {
                        this.errorCB(err)
                        process.exit(1)
                  });

	}
}