import { Request, Response } from 'express'
import { currentTS } from '../../constants'
import { User } from '../../models/User'
import bcrypt from 'bcryptjs';
import { JWTCL } from '../../bootstrap/jwt';

export const userSignup = async (request: Request, response: Response) => {
	var context: any = {
		success: false,
		message: "User Registration Successful",
		data: {}
	}

	const missingKeys = !request.body.password || !request.body.email 
	const { email, password, fullname } = request.body

	if (missingKeys) {
		var errMsg = "Keys missing in Request"
		context.message = errMsg
		console.error(`\n----${currentTS}---- User::SignUp Error: ${errMsg}`)
		return response.status(404).json(context)
	}

	try {

		var foundUser = await User.findOne({ email: email }).select("_id");
		if (foundUser !== null) {
			context.message = `Email ${email} already Taken`;
			console.error(`\n----${currentTS}---- User::Signup Error => Email ${email} already Taken`)
			return response.status(209).json(context);
		}

		var passHash = await bcrypt.hash(password, 10);
		var user = {
			email: email,
			password: passHash,
			fullname: fullname,
			status: {
				active: true,
				archived: false
			},
			token: 0
		};
		
		const createdUser = await User.create(user);
		var token = new JWTCL().createToken(createdUser._id)
		await User.findOneAndUpdate({ _id: createdUser._id}, {token:token})
		
		context.success = true
		context.data = {
			token: token
		}

		return response.status(201).json(context)

	} catch (error) {
		context.message = error.message
		console.error(`\n----${currentTS}---- User::Signup Error: ${error}`)
		return response.status(500).json(context)
	}

}