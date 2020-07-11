import * as bodyParser from 'body-parser'
import { AppRoutes } from "../routes";
import { DBConnection } from './db';
import { ENV_SETUP } from './env_setup'

ENV_SETUP()

const routeSetup = (app: any) => {
	app.use("/api/v1/users", AppRoutes.user);
	app.use("/api/v1/products", AppRoutes.product);
};

const bodyParserSetup = (app: any) => {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))
}

const startServer = (app:any) => {
	const apiPort = process.env.PORT;
	const listenCallback = () => {
		console.log(`====================================`)
		console.log(`AuthFlow App started on: \n${new Date()}`)
		console.log(`====================================`)
	}
	app.listen(apiPort, listenCallback)
}

export const initApp = (app:any) => {
	bodyParserSetup(app);
	routeSetup(app);
	const mongoConnection = new DBConnection().connectToDB()
	startServer(app);
}