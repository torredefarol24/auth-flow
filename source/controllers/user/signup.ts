import { Request, Response } from 'express'
import { currentTS } from '../../constants'

export const userSignup = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "User Registration Successful",
		data: {}
	}

	const missingKeys = !request.body.password || !request.body.email 

	if (missingKeys) {
		var errMsg = "Keys missing in Request"
		context.message = errMsg
		console.error(`\n----${currentTS}---- User::SignUp Error: ${errMsg}`)
		return response.status(404).json(context)
	}

	try {

            // Implement Signup
            // i.       Find Existing User By Email
            // ii.      Create User
            // iii.     Create Token
		
		context.success = true
		context.data = {
			user: "user",
			token: "token"
		}

		return response.status(201).json(context)

	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- User::Signup Error: ${error}`)
		return response.status(500).json(context)
	}

}