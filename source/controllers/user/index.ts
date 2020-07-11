import { userLogin } from './login'
import { userSignup } from './signup'
import { userLogout } from './logout'

export const UserController = {
	login: userLogin,
	signup: userSignup,
	logout: userLogout
}