import { Router } from 'express'
import { userController } from '../controllers/userController.js'

const userRouter = Router()
const { register, login, profile } = userController()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/profile/:id', profile)

export default userRouter
