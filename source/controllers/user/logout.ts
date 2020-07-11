import { Request, Response } from 'express'
import { currentTS } from '../../constants'

export const userLogout = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "User Logout Successful",
		data: {}
	}

	try {
      
            // Implement Logout 
            // i. Remove Token from User Row

		context.success = true
		return response.status(200).json(context)
	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- User::Logout Error: ${error}`)
		return response.status(500).json(context)
	}

}