import { Request, Response } from 'express'
import { currentTS } from '../../constants'
import { User } from '../../models/User'
import bcrypt from 'bcryptjs';
import { JWTCL } from '../../bootstrap/jwt';

export const userLogin = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "User Login Successful",
		data: {}
	}

	var errMsg = ""
	const missingKeys = !request.body.password || !request.body.email 
	const { email, password, fullname } = request.body

	if (missingKeys) {
		errMsg = "Required Keys can't be empty!"
		context.message = errMsg
		console.error(`\n----${currentTS}---- User::Login Error: ${errMsg}`)
		return response.status(404).json(context)
	}

	try {
		var foundUser : any = await User.findOne({ email : email})
		if (foundUser == null) {
			context.message = `Email / Password does not exist`;
			console.error(`\n----${currentTS}---- User::Login => Email / Password does not exist`);
			return response.status(404).json(context);
		}

		const authSuccess = await bcrypt.compare(password, foundUser.password);
		if (!authSuccess) {
			context.message = `Email / Password does not match`;
			console.error(`\n----${currentTS}---- User::Login => Email / Password does not match`)
			return response.status(401).json(context);
		}

		var token = new JWTCL().createToken(foundUser._id)

		context.success = true
		context.data = {
			token: token
		}

            return response.status(200).json(context);

	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- User::Login Error: ${error}`)
		return response.status(500).json(context)
	}
}