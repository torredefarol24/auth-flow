import { Request, Response } from 'express'
import { currentTS } from '../../constants'

export const getAllProducts = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "Products Fetching Successful",
		data: {}
	}

	try {
		
		context.success = true
		context.data = {
			products: ["test1", "test2"]
		}

            return response.status(200).json(context);

	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- Products::GetAllProducts Error: ${error}`)
		return response.status(500).json(context)
	}
}