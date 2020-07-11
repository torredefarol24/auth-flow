import express from "express";
import path from "path";
import { bodyParserSetup, routeSetup } from "../bootstrap/setup";

var pathOpts = {
	path: path.join(__dirname + "/../../", ".env")
};
require("dotenv").config(pathOpts);

export class AuthFlow {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.setupBodyParser(this.app);
		this.setupAppRoutes(this.app);
	}

	private setupAppRoutes(app: any) {
		routeSetup(app);
	}

	private setupBodyParser(app: any) {
		bodyParserSetup(app);
	}

	public startServer() {
		const listenPort = process.env.PORT
		const listenCallback = () => {
			console.log(`====================================`)
			console.log(`AuthFlow App started on: \n${new Date()}`)
			console.log(`====================================`)
		}

		this.app.listen(listenPort, listenCallback)
	}
}