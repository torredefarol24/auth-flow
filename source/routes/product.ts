import { Router } from "express";
import { ProductController } from "../controllers/products/";
import { checkUserJWT } from "../middleware/check_jwt_user";

export const productRouter: Router = Router();
productRouter.get("/", checkUserJWT, ProductController.getAll);
