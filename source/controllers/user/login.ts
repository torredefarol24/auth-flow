import { Request, Response } from 'express'
import { currentTS } from '../../constants'

export const userLogin = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "User Login Successful",
		data: {}
	}

	var errMsg = ""
	if (!request.body.email) {
		errMsg = "Email can't be empty!"
		context.message = errMsg
		console.error(`\n----${currentTS}---- User::Login Error: ${errMsg}`)
		return response.status(404).json(context)
	}

	try {
		
		context.success = true
		context.data = {
			user: "test",
			token: "test"
		}

            // Implement Login 
                  // i. Find User by Email
                  // ii. Match Username/Password
                  /// iii. Create Token if authenticated

		return response.status(200).json(context);

	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- User::Login Error: ${error}`)
		return response.status(500).json(context)
	}
}