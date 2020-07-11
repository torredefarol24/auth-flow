import { Request, Response } from 'express'
import { currentTS } from '../../constants'
import { JWTCL } from '../../bootstrap/jwt'
import { User } from '../../models/User'

export const userLogout = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "User Logout Successful",
		data: {}
	}

	try {
		const headerToken : any = 
			request.headers && 
			request.headers.authorization && 
			request.headers.authorization.split(" ")[1]

		const userId = new JWTCL().getUserIdFromToken(headerToken);
		await User.findOneAndUpdate({ _id : userId}, {token : null})

		context.success = true
		return response.status(200).json(context)
	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- User::Logout Error: ${error}`)
		return response.status(500).json(context)
	}

}