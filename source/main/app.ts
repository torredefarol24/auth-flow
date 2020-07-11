import express from "express";
import { initApp } from "../bootstrap/setup";

export class AuthFlowApi {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.initializeApp(this.app);
	}

	private initializeApp(app: any) {
		initApp(app);
	}

}