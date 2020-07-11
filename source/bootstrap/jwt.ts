import * as JWT from 'jsonwebtoken';
import { ENV_SETUP } from './env_setup'
ENV_SETUP();

export class JWTCL {
	private TOKEN_SECRET: string;
	private REFRESH_ROKEN_SECRET: string;
	private TOKEN_LIMIT: number;
	private REFRESH_TOKEN_LIMIT: number;

	constructor() {
		this.TOKEN_SECRET = `${process.env.TOKEN_SECRET}`;
            this.REFRESH_ROKEN_SECRET = `${process.env.REFRESH_TOKEN_SECRET}`;
            
		// this.TOKEN_LIMIT = 60 * 60 * 24 * 2 // 2 Days;
		this.TOKEN_LIMIT = 60 * 60 * 24 * 2 * 10 // 20 Days ;
		this.REFRESH_TOKEN_LIMIT = 60 * 60 * 24 * 3 * 10 // 30 Days;
	}

	public createToken(user_id: string) {
		var signOpts = {
			user_id: user_id,
		}

		var expireOpts = {
			expiresIn: this.TOKEN_LIMIT
		}

		var token: string = JWT.sign(signOpts, this.TOKEN_SECRET, expireOpts)
		return token
	}

	public verifyToken(token: string) {
		try {
			var result = JWT.verify(token, this.TOKEN_SECRET)
			return result
		} catch (error) {
			console.error(`JWT Manager : verifyToken => ${error}`)
			if (error.name === 'TokenExpiredError') {
				return 0
			}
		}
	}

	// public createRefreshToken(data: any) {
	// 	var signOpts = {
	// 		user_id: data._id,
	// 	}

	// 	var expireOpts = {
	// 		expiresIn: this.REFRESH_TOKEN_LIMIT
	// 	}

	// 	var token: string = JWT.sign(signOpts, this.REFRESH_ROKEN_SECRET, expireOpts);
	// 	return token
	// }


	// public verifyRefreshToken(token: string) {
	// 	try {
	// 		var result = JWT.verify(token, this.REFRESH_ROKEN_SECRET)
	// 		return result
	// 	} catch (error) {
	// 		console.error(`JWT Manager : verifyRefreshToken => ${error}`)
	// 		if (error.name === 'TokenExpiredError') {
	// 			return 0
	// 		}
	// 	}
	// }

}