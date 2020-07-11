import * as bodyParser from 'body-parser'
import { AppRoutes } from "../routes";

export const routeSetup = (app: any) => {
	app.use("/api/v1/users", AppRoutes.user);
	app.use("/api/v1/products", AppRoutes.product);
};

export const bodyParserSetup = (app: any) => {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))
}