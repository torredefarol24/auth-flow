import { Request, Response, NextFunction } from 'express'
import { JWTCL } from '../bootstrap/jwt';
import { currentTS } from '../constants';

export const checkUserJWT = async (request: Request, response: Response, next: NextFunction) => {

      var context = {
            message : "",
            success : false,
            data : null
      }

      if (!request.headers.authorization) {
		context.message = "Missing Authorization in Request Headers";
		console.error(`\n----${currentTS}---- Middleware::checkJWT => Missing Authorization in Request Headers`)
		return response.status(401).json(context)
	}

	if (!request.headers.authorization.split(" ")[1]) {
		context.message = "Missing Token in Request Headers";
		console.error(`\n----${currentTS}---- Middleware::checkJWT => Missing Token in Request Headers`)
		return response.status(401).json(context)
	}

	var token = request.headers.authorization.split(" ")[1]
	var verificationResult = new JWTCL().verifyToken(token);

	if (verificationResult === 0) {
		context.message = "Token Expired";
		console.error(`\n----${currentTS}---- Middleware::checkJWT => Token Expired`)
		return response.status(419).json(context)
	} else if (!verificationResult) {
		context.message = "Authorization Failed";
		console.error(`\n----${currentTS}---- Middleware::checkJWT => Authorization Failed - Invalid Token`)
		return response.status(401).json(context)
	}

	next()
}
